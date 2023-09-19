from django.urls import path

from .restapi import SettingsView, DocumentMenuListView

urlpatterns = [
    path('api/conf/', SettingsView.as_view(), name='settings'),
    path('api/conf/menu/', DocumentMenuListView.as_view(), name='document_menu'),
]
