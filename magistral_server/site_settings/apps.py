import sys

from django.apps import AppConfig


class SiteSettingsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'site_settings'
    verbose_name = "Основные настройки сайта"

    def ready(self):
        site_settings = self.get_model('SiteSettings')
        if ('makemigrations' not in sys.argv) and ('migrate' not in sys.argv):
            if not site_settings.objects.count():
                site_settings.objects.create()

