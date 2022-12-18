from rest_framework.serializers import ModelSerializer
from image_handler.models import ImageBlock


class ImageBlockSerializer(ModelSerializer):
    class Meta:
        model = ImageBlock
        fields = ("id", "image", "modified_at", "user", "title", "description")


class ImageUploadSerializer(ModelSerializer):
    class Meta:
        model = ImageBlock
        fields = ("image", "title", "description", "id")
