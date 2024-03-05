from django.urls import path

from .restapi import *

urlpatterns = [
    path('api/voting/list/', MeetingProtocolListView.as_view(), name='protocols_list'),
    path('api/voting/<int:pk>/', DetailMeetingProtocolView.as_view(), name='detail_protocol'),
    path('api/voting/vote/', CreateVotesView.as_view(), name='detail_protocol'),
]
