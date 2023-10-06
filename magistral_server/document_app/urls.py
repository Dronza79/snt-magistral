from django.urls import path

from .restapi import DocumentListView

urlpatterns = [
    path('api/doc/', DocumentListView.as_view(), name='all_doc'),
    path('api/doc/<int:pk>/', DocumentListView.as_view(), name='doc_from_menu'),
]
