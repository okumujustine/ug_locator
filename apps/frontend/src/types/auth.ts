export interface UserInfo {
  name: string;
  email: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface AuthResponse {
  token: AuthTokens;
  info: UserInfo;
}

export interface AuthData {
  accessToken: string | null;
  user: UserInfo;
}
