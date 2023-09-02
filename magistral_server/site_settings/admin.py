from django.contrib import admin
from django.shortcuts import redirect

from .models import SiteSettings


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

