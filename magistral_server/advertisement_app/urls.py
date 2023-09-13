from django.urls import path

from .restapi import *

urlpatterns = [
    path('api/news/', NewsAPIView.as_view(), name='news_list'),
    path('api/news/<int:pk>/', NewsAPIView.as_view(), name='detail_news'),
]
