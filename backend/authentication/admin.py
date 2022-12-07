from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from rest_framework_simplejwt import token_blacklist
from authentication.models import UserAccount


class OutstandingTokenAdmin(token_blacklist.admin.OutstandingTokenAdmin):  # type: ignore
    def has_delete_permission(self, *args, **kwargs):
        return True  # or whatever logic you want


class UserAccountAdmin(UserAdmin):
    list_display = (
        "email",
        "first_name",
        "last_name",
        "is_active",
        "is_staff",
        "is_superuser",
        "joined_on",
        "last_login",
        "password",
    )
    search_fields = ("email", "first_name", "last_name")
    readonly_fields = ["id", "joined_on", "last_login"]
    ordering = ["-joined_on", "first_name"]
    fieldsets = []


admin.site.register(UserAccount, UserAccountAdmin)
admin.site.unregister(token_blacklist.models.OutstandingToken)  # type: ignore
admin.site.register(token_blacklist.models.OutstandingToken, OutstandingTokenAdmin)  # type: ignore
