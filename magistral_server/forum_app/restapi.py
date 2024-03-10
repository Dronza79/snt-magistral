from rest_framework.generics import RetrieveAPIView, ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Post
from .serializer import PostSerializer, ListPostSerializer


class ListPostView(ListAPIView):
    serializer_class = ListPostSerializer

    def get_queryset(self):
        return (Post.objects
                .prefetch_related('comments')
                .all())


class CreatePostView(CreateAPIView):
    serializer_class = ListPostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (Post.objects
                .prefetch_related('comments')
                .all())


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
