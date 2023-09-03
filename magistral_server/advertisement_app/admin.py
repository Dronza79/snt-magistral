from django.contrib import admin

from .models import *


def register_hidden_models(*model_names):
    for model in model_names:
        model_admin = type(
            str(model)+'Admin',
            (admin.ModelAdmin,),
            {
                'get_model_perms': lambda self, request: {}
            })
        admin.site.register(model, model_admin)


register_hidden_models(FileNews)


@admin.register(Advertisement)
class AdvertisementAdmin(admin.ModelAdmin):
    ordering = ['pub_date']
    list_filter = ['tag_news']
    list_display = []