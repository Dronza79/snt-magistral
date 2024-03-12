from django.urls import path

from .restapi import *

urlpatterns = [
    path('api/post/add/', ListCreatePostView.as_view(), name='create_post'),
    path('api/post/list/', ListCreatePostView.as_view(), name='list_posts'),
    path('api/post/<int:pk>/', DetailUpdatePostView.as_view(), name='detail_post'),
    path('api/post/<int:pk>/active/', DetailUpdatePostView.as_view(), name='update_post'),
    path('api/post/<int:pk>/comment/add/', CreateCommentView.as_view(), name='create_comment'),
]
