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
    ordering = ['order']
    list_display = ['__str__', 'get_icon', 'parent', 'position', 'published']
    list_display_links = ['__str__']
    list_editable = ['parent', 'position', 'published']
    prepopulated_fields = {'slug': ('title',)}
    fields = ['title', 'parent', 'slug', 'image', 'position']


@admin.register(DocumentImage)
class DocumentImageAdmin(admin.ModelAdmin):
    def get_model_perms(self, request):
        return {}
