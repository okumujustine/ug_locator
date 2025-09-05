FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Build both apps
RUN pnpm --filter @ug-locator/backend build
RUN pnpm --filter @ug-locator/frontend build
# Frontend doesn't need a build step for dev, but if you want to build for production:
# RUN pnpm --filter @ug-locator/frontend build

# Deploy each app with production dependencies only
RUN pnpm deploy --filter=@ug-locator/frontend --prod /prod/frontend
RUN pnpm deploy --filter=@ug-locator/backend --prod /prod/backend

# Frontend stage
FROM base AS frontend
COPY --from=build /prod/frontend /prod/frontend
WORKDIR /prod/frontend
EXPOSE 5173
CMD [ "node", "dist/main" ]

# Backend stage  
FROM base AS backend
COPY --from=build /prod/backend /prod/backend
WORKDIR /prod/backend
EXPOSE 3000
CMD [ "node", "dist/main" ]