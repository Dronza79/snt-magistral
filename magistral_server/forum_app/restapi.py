from rest_framework.generics import RetrieveAPIView

from .models import Post
from .serializer import PostSerializer


# class MeetingProtocolListView(ListAPIView):
#     serializer_class = ListSerializer
#
#     def get_queryset(self):
#         return (MeetingProtocol.objects
#                 .prefetch_related('questions', 'questions__answers')
#                 .all())


class DetailPostView(RetrieveAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        return (Post.objects
                .prefetch_related('comments')
                .all())


# class CreateVotesView(CreateAPIView):
#     serializer_class = VoteSerializer
#     queryset = Vote.objects.all()
#     permission_classes = [IsAuthenticated]
