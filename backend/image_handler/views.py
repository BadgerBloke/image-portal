from urllib import request
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from image_handler.serializers import ImageBlockSerializer, ImageUploadSerializer
from image_handler.models import ImageBlock
from rest_framework.permissions import IsAuthenticated
from django.core.files.storage import default_storage


class ImageBlockView(ListAPIView):
    serializer_class = ImageBlockSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return ImageBlock.objects.order_by("-modified_at").filter(
            user=self.request.user
        )

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class ImageUploadView(CreateAPIView):
    queryset = ImageBlock.objects.all()
    serializer_class = ImageUploadSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)


class ImageDeleteView(DestroyAPIView):
    queryset = ImageBlock.objects.all()
    serializer_class = ImageBlockSerializer
    permission_classes = (IsAuthenticated,)

    def perform_destroy(self, instance):
        if instance.user != self.request.user:
            return self.permission_denied(
                self.request, message="You do not have permission to delete this image."
            )
        else:
            default_storage.delete(instance.image.name)
            return instance.delete()
