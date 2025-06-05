from uuid import uuid4
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError("User must have an email address")
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, name, password):
        user = self.create_user(email, name, password)
        user.is_superuser = True
        user.is_staff = True
        return user
class CustomUser(AbstractBaseUser, PermissionsMixin):
    ROLES_CHOICES = [("user", "User"), ("super_admin", "Super Admin")]
    role = models.CharField(max_length=20, choices=ROLES_CHOICES, default="user")
    phone_number = models.CharField(max_length=20, blank=True)
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255, unique=True, default=uuid4())
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True) 

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["name"]

    objects =  CustomUserManager()

    def is_super_admin(self) -> bool:
        return self.role == "super_admin"

    def __str__(self) -> str:
        return self.email
