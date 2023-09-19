from django.contrib import admin
from django.shortcuts import redirect

from .models import SiteSettings, DocumentMenu, DocumentImage


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = [
        '__str__', 'site_url', 'site_title',
        'site_email', 'site_social', 'site_telegram', 'site_postal'
    ]
    list_editable = [
        'site_url',
        'site_title', 'site_email',
        'site_social', 'site_telegram', 'site_postal']

    def has_add_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(DocumentMenu)
class DocumentMenuAdmin(admin.ModelAdmin):
    list_display = ['id', 'get_icon', 'title', 'href', 'parent']
    prepopulated_fields = {'slug': ('title',)}
    # readonly_fields = ['slug']
    fields = ['title', 'parent', 'slug', 'image']


@admin.register(DocumentImage)
class DocumentImageAdmin(admin.ModelAdmin):
    def get_model_perms(self, request):
        return {}
