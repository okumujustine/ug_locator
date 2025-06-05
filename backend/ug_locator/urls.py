from django.contrib import admin
from django.urls import include, path

from . import views

urlpatterns = [
    path("places/", include("places.urls")),
    path("healthz", views.healthz_view),
    path("admin/", admin.site.urls),
    path("accounts/", include("accounts.urls")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
]

admin.site.site_header = "UgLocate"
admin.site.site_title = "UgLocate | Discover the best businesses across cities with our location-based service"
admin.site.index_title = "Give your customers the best experience"
