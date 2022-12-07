from rest_framework.serializers import ModelSerializer, SerializerMethodField
from django.contrib.auth import get_user_model

User = get_user_model()


class UserCreateSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "email", "first_name", "last_name", "password")

    def create(self, validated_data):
        user = User.objects.create_user(  # type: ignore
            validated_data["email"],
            validated_data["password"],
            validated_data["first_name"],
            validated_data["last_name"],
        )
        return user


class UserRegisterSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "email", "first_name", "last_name", "password")
