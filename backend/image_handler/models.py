from django.db import models
from authentication.models import UserAccount


class ImageBlock(models.Model):
    image = models.ImageField(upload_to="image_block/user_uploads/")
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    user = models.ForeignKey(
        UserAccount,
        on_delete=models.CASCADE,
        related_name="image_blocks",
    )
    uploaded_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
