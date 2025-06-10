from django.contrib.auth import login
from django.shortcuts import redirect, render
from rest_framework.generics import RetrieveUpdateAPIView, CreateAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .serializers import CustomUserSerializer, RegisterUserSerializer, UserLoginSerializer



class CustomUserDetailView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CustomUserSerializer

    def get_object(self):
        return self.request.user


class UserRegistrationView(CreateAPIView):
    serializer_class = RegisterUserSerializer


class UserLoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            # generate token and login user
            ...

