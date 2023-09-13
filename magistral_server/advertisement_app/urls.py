from django.urls import path

from .restapi import *

urlpatterns = [
    path('api/news/', ListNewsAPIView.as_view(), name='news_list'),
    path('api/news/<int:pk>/', DetailNewsAPIView.as_view(), name='detail_news'),
]
