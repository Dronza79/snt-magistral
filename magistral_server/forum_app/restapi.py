from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateAPIView, ListAPIView, \
    RetrieveAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Post, Comment
from .permissions import IsAdminOrIsOwnerOrReadOnly
from .serializer import DetailPostSerializer, CommentSerializer, ListPostSerializer


class ListPostView(ListAPIView):
    serializer_class = ListPostSerializer

    def get_queryset(self):
        return (Post.objects.filter(hidden=False)
                .prefetch_related('comments')
                .all())


class CreatePostView(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = ListPostSerializer
    permission_classes = [IsAuthenticated]


class DetailPostView(RetrieveAPIView):
    serializer_class = DetailPostSerializer

    def get_queryset(self):
        return (Post.objects.filter(hidden=False)
                .prefetch_related('comments')
                .all())


class UpdatePostView(UpdateAPIView):
    serializer_class = DetailPostSerializer
    permission_classes = [IsAdminOrIsOwnerOrReadOnly]

    def get_queryset(self):
        return (Post.objects.filter(hidden=False)
                .prefetch_related('comments')
                .all())


class CreateCommentView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]
