from django.contrib import admin
from django.urls import include, path

from . import views

urlpatterns = [
    path("", views.hello_world),
    path("healthz", views.healthz_view),
    path("admin/", admin.site.urls),
    path("accounts/", include("accounts.urls")),
    path("places/", include("places.urls")),
]
