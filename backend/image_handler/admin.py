from django.contrib import admin
from image_handler.models import ImageBlock


class ImageBlockAdmin(admin.ModelAdmin):
    list_display = ("title", "user", "image", "description", "modified_at")
    list_per_page = 25
    search_fields = ("title", "user", "description")


admin.site.register(ImageBlock, ImageBlockAdmin)
