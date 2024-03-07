from rest_framework.generics import RetrieveAPIView, ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated

from .models import MeetingProtocol, Vote
from .serializer import VoteSerializer, ListSerializer, DetailSerializer


class MeetingProtocolListView(ListAPIView):
    serializer_class = ListSerializer

    def get_queryset(self):
        return (MeetingProtocol.objects
                .prefetch_related('questions', 'questions__answers')
                .all())


class DetailMeetingProtocolView(RetrieveAPIView):
    serializer_class = DetailSerializer

    def get_queryset(self):
        return (MeetingProtocol.objects
                .prefetch_related('questions', 'questions__answers')
                .all())


class CreateVotesView(CreateAPIView):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()
    permission_classes = [IsAuthenticated]
