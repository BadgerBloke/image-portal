from typing import Any, Optional
from django.http.request import HttpRequest
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend


class CaseInsensitiveModelBackend(ModelBackend):
    def authenticate(
        self,
        request: HttpRequest,
        username: Optional[str] = None,
        password: Optional[str] = None,
        **kwargs: Any,
    ) -> Optional[AbstractBaseUser]:
        UserModel = get_user_model()
        if username is None:
            username = kwargs.get(UserModel.USERNAME_FIELD)  # type: ignore
        try:
            case_insensitive_username_field = f"{UserModel.USERNAME_FIELD}__iexact"  # type: ignore
            user = UserModel._default_manager.get(
                **{case_insensitive_username_field: username}
            )
        except UserModel.DoesNotExist:
            UserModel().set_password(password)
        else:
            user = super().authenticate(request, username, password, **kwargs)
            return user
