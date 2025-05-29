from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from accounts.models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    fieldsets = list(UserAdmin.fieldsets) + [
        ("Extra Info", {"fields": ("role", "phone_number")}),
    ]
    list_display = ("username", "email", "role", "is_staff")
