from rest_framework.generics import RetrieveAPIView, ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Protocol, Vote
from .serializer import VoteSerializer, ListProtocolSerializer, DetailProtocolSerializer


class ListProtocolView(ListAPIView):
    serializer_class = ListProtocolSerializer

    def get_queryset(self):
        return (Protocol.objects
                .prefetch_related('questions', 'questions__answers')
                .all())


class DetailProtocolView(RetrieveAPIView):
    serializer_class = DetailProtocolSerializer

    def get_queryset(self):
        return (Protocol.objects
                .prefetch_related('questions', 'questions__answers')
                .all())


class CreateVotesView(CreateAPIView):
    serializer_class = VoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (Vote.objects
                .select_related('protocol', 'owner', 'value', 'question')
                .all())
