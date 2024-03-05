from rest_framework.generics import RetrieveAPIView, ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated

from .models import MeetingProtocol, Vote
from .serializer import MeetingProtocolSerializer, VoteSerializer


class MeetingProtocolListView(ListAPIView):
    serializer_class = MeetingProtocolSerializer

    def get_queryset(self):
        return MeetingProtocol.objects.select_related().all()


class DetailMeetingProtocolView(RetrieveAPIView):
    serializer_class = MeetingProtocolSerializer
    queryset = MeetingProtocol.objects.all()


class CreateVotesView(CreateAPIView):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()
    permission_classes = [IsAuthenticated]

