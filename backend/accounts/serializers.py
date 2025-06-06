from typing import Any, Dict
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model
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
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "name": user.name,
            "email": user.email,
        }

        return newData
    
class CutomObtainPairView(TokenObtainPairView):
    serializer_class = TokenObtainSerializer