from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from accounts.models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    fieldsets = [
        ("Extra Info", {"fields": ("role", "phone_number")}),
    ]
    list_display = ("email", "role", "is_active", "is_staff")
    ordering = ("email",)
