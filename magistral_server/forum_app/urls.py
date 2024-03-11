from django.urls import path

from .restapi import *

urlpatterns = [
    path('api/post/list/', ListPostView.as_view(), name='list_post'),
    path('api/post/add/', CreatePostView.as_view(), name='create_post'),
    path('api/post/<int:pk>/', DetailPostView.as_view(), name='detail_post'),
    # path('api/voting/vote/', CreateVotesView.as_view(), name='get_votes'),
]
