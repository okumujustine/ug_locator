from django.urls import path

from .views import (
    CustomUserDetailView, 
    UserRegistrationView, 
    UserLogoutView,
    UserLoginView,
    CookieTokenRefreshView
)

urlpatterns = [
    path("register/", UserRegistrationView.as_view(), name="user-registration"),
    path("login/", UserLoginView.as_view(), name="user-login"),
    path("refresh/", CookieTokenRefreshView.as_view(), name="token-refresh"),
    path("info/", CustomUserDetailView.as_view(), name="user-info"),
    path("logout/", UserLogoutView.as_view(), name="user-logout"),
]
