from django.contrib import admin

from .models import *


@admin.register(FileNews)
class FileNewsAdmin(admin.ModelAdmin):
    def get_model_perms(self, request):
        return {}


class FileNewsInline(admin.StackedInline):
    model = FileNews
    verbose_name = "Файл новости"
    verbose_name_plural = "Файлы новости"
    extra = 1


@admin.register(Advertisement)
class AdvertisementAdmin(admin.ModelAdmin):
    ordering = ['-pub_date']
    list_filter = ['tag_news']
    list_display = [
        'get_small_title', 'tag_news', 'get_files_count',
        'create_at', 'pub_date', 'state_news',
    ]
    list_display_links = ['get_small_title']
    list_editable = ['state_news']
    readonly_fields = ['pub_date']
    inlines = [FileNewsInline]

