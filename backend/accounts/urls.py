from django.contrib.auth import views as auth_views
from django.urls import path

from .views import custom_signup_view

urlpatterns = [
    path(
        "login/",
        auth_views.LoginView.as_view(template_name="accounts/login.html"),
        name="login",
    ),
    path("logout/", auth_views.LogoutView.as_view(next_page="login"), name="logout"),
    path("signup/", custom_signup_view, name="signup"),
]
