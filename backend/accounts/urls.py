from django.contrib.auth import views as auth_views
from django.urls import path

from .serializers import CutomObtainPairView

from .views import CustomUserDetailView, UserRegistrationView

urlpatterns = [
    path('auth/jwt/create/', CutomObtainPairView.as_view(), name='auth-token-login'),
    path("info/", CustomUserDetailView.as_view(), name="account-info"),
    path("register/", UserRegistrationView.as_view(), name="register-user"),
]
