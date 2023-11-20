from django.urls import path

from .restapi import DocumentListView

urlpatterns = [
    path('api/doclist/menu<int:pk>/', DocumentListView.as_view(), name='doc_from_menu'),
]
