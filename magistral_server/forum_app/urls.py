from django.urls import path

from .restapi import *

urlpatterns = [
    path('api/post/list/', ListPostView.as_view(), name='post_list'),
    path('api/post/<int:pk>/', DetailPostView.as_view(), name='detail_post'),
    # path('api/voting/vote/', CreateVotesView.as_view(), name='get_votes'),
]
