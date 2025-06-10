from rest_framework_simplejwt.authentication import JWTAuthentication

from rest_framework_simplejwt.exceptions import AuthenticationFailed, InvalidToken

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):

        access_token = request.COOKIES.get('access_token')
        if not access_token:
            return None

        try:
            validated_token = self.get_validated_token(access_token)
        except AuthenticationFailed as e:
            raise AuthenticationFailed(f"Token validation failed")
        except InvalidToken as e:
            raise AuthenticationFailed("Token has expired.")
        
        try:
            user = self.get_user(validated_token)
            if not user.is_active:
                raise AuthenticationFailed("User is inactive.")
            
            return user, validated_token
        except Exception as e:
            raise AuthenticationFailed(f"User retrieval failed: {str(e)}")
        