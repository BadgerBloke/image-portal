from django.urls import path
from image_handler.views import ImageBlockView, ImageUploadView, ImageDeleteView

urlpatterns = [
    path("all/", ImageBlockView.as_view(), name="images"),
    path("add/", ImageUploadView.as_view(), name="add-image"),
    path("delete/<int:pk>/", ImageDeleteView.as_view(), name="delete-image"),
]
