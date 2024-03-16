from django.contrib import admin
from django.shortcuts import redirect

from .models import SiteSettings, DocumentMenu, DocumentImage
from document_app.models import Document


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


class DocumentInlines(admin.TabularInline):
    model = Document
    extra = 0


class DocumentMenuInlines(admin.TabularInline):
    model = DocumentMenu
    prepopulated_fields = {'slug': ('title',)}
    fields = ['title', 'slug', 'order', 'position', 'is_public']
    readonly_fields = ['order', 'position']
    extra = 0


@admin.register(DocumentMenu)
class DocumentMenuAdmin(admin.ModelAdmin):
    ordering = ['order']
    list_display = ['admin_representation', 'get_icon', 'order', 'position', 'show_how_many_includes', 'is_public']
    list_display_links = ['admin_representation']
    list_editable = ['position', 'order', 'is_public']
    prepopulated_fields = {'slug': ('title',)}
    fields = ['title', 'parent', 'slug', 'image', 'is_public']
    inlines = [DocumentMenuInlines, DocumentInlines]


@admin.register(DocumentImage)
class DocumentImageAdmin(admin.ModelAdmin):
    def get_model_perms(self, request):
        return {}
