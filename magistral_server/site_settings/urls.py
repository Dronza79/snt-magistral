from django.urls import path

from .restapi import SettingsView

urlpatterns = [
    path('api/conf/', SettingsView.as_view(), name='settings'),
]
