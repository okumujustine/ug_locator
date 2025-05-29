from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    ROLES_CHOICES = [("user", "User"), ("super_admin", "Super Admin")]
    role = models.CharField(max_length=20, choices=ROLES_CHOICES, default="user")
    phone_number = models.CharField(max_length=20, blank=True)

    def is_super_admin(self) -> bool:
        return self.role == "super_admin"

    def __str__(self) -> str:
        return self.username
