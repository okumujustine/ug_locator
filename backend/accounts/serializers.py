from typing import Any, Dict
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers

class TokenObtainSerializer(TokenObtainPairSerializer):
    def validate(self, attrs: Dict[str, Any]) -> Dict[str, str]:
        data = super().validate(attrs)
        refresh = self.get_token(self.user)

        CustomUser = get_user_model()
        try:
            user = CustomUser.objects.filter(email=attrs.get("email")).first()
        except CustomUser.DoesNotExist:
            raise serializers.ValidationError("No such user exists")
        
        newData = {
            "token": {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            },
            "info": {
                "name": user.name,
                "email": user.email,
            }
        }

        return newData
    
class CutomObtainPairView(TokenObtainPairView):
    serializer_class = TokenObtainSerializer


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("id", "email", "name", "role", "phone_number")
        read_only_fields = ("id", "email", "role")
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.phone_number = validated_data.get("phone_number", instance.phone_number)
        instance.save()
        return instance

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("email", "name", "password")
        extra_kwargs = {
            "password": {"write_only": True},
            "name": {"required": True},
        }
    
    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            email=validated_data["email"],
            name=validated_data["name"],
            password=validated_data["password"],
        )
        return user
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        if not email or not password:
            raise serializers.ValidationError("Invalid credentials.")
        
        user = authenticate(username=email, password=password)

        if user is None:
            raise serializers.ValidationError("Invalid credentials.")
        
        if not user.is_active:
            raise serializers.ValidationError("User account is inactive.")

        return user