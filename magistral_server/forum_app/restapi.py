from rest_framework.generics import RetrieveAPIView, CreateAPIView, ListCreateAPIView, UpdateAPIView, \
    RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

from .models import Post, Comment
from .permissions import IsAdminOrIsOwnerOrReadOnly
from .serializer import DetailPostSerializer, CommentSerializer, ListPostSerializer


class ListCreatePostView(ListCreateAPIView):
    serializer_class = ListPostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return (Post.objects.filter(hidden=False)
                .prefetch_related('comments')
                .all())


class DetailUpdatePostView(RetrieveUpdateAPIView):
    serializer_class = DetailPostSerializer
    permission_classes = [IsAdminOrIsOwnerOrReadOnly]

    def get_queryset(self):
        return (Post.objects.filter(hidden=False)
                .prefetch_related('comments')
                .all())


class CreateCommentView(CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Comment.objects.all()
