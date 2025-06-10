from uuid import uuid4
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, password=None, **extra_fields):
        if not email:
            raise ValueError("User must have an email address")
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True.")
        
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        
        return self.create_user(email, name, password, **extra_fields)
class CustomUser(AbstractBaseUser, PermissionsMixin):
    ROLES_CHOICES = [("user", "User"), ("super_admin", "Super Admin")]
    role = models.CharField(max_length=20, choices=ROLES_CHOICES, default="user")
    phone_number = models.CharField(max_length=20, blank=True)
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255, unique=False, blank=True, null=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True) 

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["name"]

    objects =  CustomUserManager()

    def is_super_admin(self) -> bool:
        return self.role == "super_admin"

    def __str__(self) -> str:
        return self.email
