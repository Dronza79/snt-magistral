from django.urls import path

from .restapi import *

urlpatterns = [
    path('api/post/add/', CreatePostView.as_view(), name='create_post'),
    path('api/post/list/', ListPostView.as_view(), name='list_posts'),
    path('api/post/<int:pk>/', DetailPostView.as_view(), name='detail_post'),
    path('api/post/<int:pk>/active/', UpdatePostView.as_view(), name='update_post'),
    path('api/post/<int:pk>/add/', CreateCommentView.as_view(), name='create_comment'),
]
