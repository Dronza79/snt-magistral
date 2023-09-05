from django.urls import path

from .restapi import *

urlpatterns = [
    path('api/news/', NewsAPIView.as_view(), name='news_list'),
]
