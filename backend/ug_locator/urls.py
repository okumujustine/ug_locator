from django.contrib import admin
from django.urls import include, path
from django.urls import re_path

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from . import views

urlpatterns = [
    path("places/", include("places.urls")),
    path("healthz", views.healthz_view),
    path("api/v1/accounts/", include("accounts.urls")),
    path("api/v1/auth/", include("djoser.urls")),
    path("api/v1/auth/", include("djoser.urls.jwt")),
    path("admin/", admin.site.urls),
]

admin.site.site_header = "UgLocate"
admin.site.site_title = "UgLocate | Discover the best businesses across cities with our location-based service"
admin.site.index_title = "Give your customers the best experience"
