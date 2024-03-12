from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from rest_framework.exceptions import NotAcceptable

from .models import Post, Comment


class FilterHiddenSerializer(serializers.ListSerializer):
    def to_representation(self, data):
        data = data.filter(hidden=False)  # Скрытие из рекурсивных ответов
        return super().to_representation(data)


class RecursiveSerializer(serializers.Serializer):
    class Meta:
        list_serializer_class = FilterHiddenSerializer

    def to_representation(self, instance):
        ser = self.parent.parent.__class__(instance, context=self.context)
        return ser.data


class FilterParentSerializer(serializers.ListSerializer):
    def to_representation(self, data):
        data = (data
                .filter(hidden=False)  # Скрытие из списка первых ответов
                .filter(comment=None)
                )
        return super().to_representation(data)


class CommentSerializer(serializers.ModelSerializer):
    recomments = RecursiveSerializer(many=True, read_only=True)
    publisher = serializers.CharField(source='publisher.username', read_only=True)
    comment = serializers.IntegerField(write_only=True, required=False)

    class Meta:
        model = Comment
        list_serializer_class = FilterParentSerializer
        fields = ['id', 'create_at', 'author',
                  'publisher', 'content',
                  'comment', 'recomments'
                  ]

    def create(self, validated_data):
        validated_data["publisher"] = self.context.get("request").user
        post = Post.objects.get(id=self.context.get("view").kwargs.get('pk'))
        validated_data["post"] = post
        if validated_data.get('comment'):
            try:
                comment = Comment.objects.get(id=validated_data["comment"])
            except ObjectDoesNotExist:
                raise NotAcceptable('Такого комментария не найдено')
            if comment not in post.comments.all():
                raise NotAcceptable('Не верное значение комментария. Он не относится к этому вопросу')
            validated_data["comment"] = Comment.objects.get(id=validated_data["comment"])
        return Comment.objects.create(**validated_data)


class CountCommentSerializer(serializers.Serializer):
    def to_representation(self, instance: Post) -> int:
        return instance.comments.count()


class ListPostSerializer(serializers.ModelSerializer):
    count_comments = CountCommentSerializer(source='*', read_only=True)
    publisher = serializers.CharField(source='publisher.username', read_only=True)
    content = serializers.CharField(write_only=True)
    update_post = serializers.IntegerField(write_only=True)

    class Meta:
        model = Post
        fields = ['id', 'create_at', 'active',
                  'title', 'author', 'publisher',
                  'content', 'count_comments', 'update_post'
                  ]
        read_only_fields = ('active',)

    def create(self, validated_data):
        validated_data["publisher"] = self.context.get("request").user
        return super().create(validated_data)


class DetailPostSerializer(serializers.ModelSerializer):
    count_comments = CountCommentSerializer(source='*', read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    publisher = serializers.CharField(source='publisher.username', read_only=True)
    content = serializers.CharField(read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'create_at', 'edit_at', 'active',
                  'author', 'publisher', 'title',
                  'content', 'count_comments', 'comments'
                  ]
        read_only_fields = ('author', 'title',)
