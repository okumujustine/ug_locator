from django.contrib.auth import views as auth_views
from django.urls import path

from .serializers import CutomObtainPairView

from .views import custom_signup_view

urlpatterns = [
    path('auth/jwt/create/', CutomObtainPairView.as_view(), name='auth-token-login'),
]
