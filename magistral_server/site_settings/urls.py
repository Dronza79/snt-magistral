from django.urls import path

from .restapi import SettingsView

urlpatterns = [
    path('conf/', SettingsView.as_view(), name='settings'),
]
