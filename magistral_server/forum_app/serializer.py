from rest_framework import serializers

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
        print(f'{ser.data=}')
        return ser.data


class FilterParentSerializer(serializers.ListSerializer):
    def to_representation(self, data):
        data = (data
                .filter(hidden=False)  # Скрытие из списка первых ответов
                .filter(comment=None)
                )
        return super().to_representation(data)


class CommentSerializer(serializers.ModelSerializer):
    recomments = RecursiveSerializer(many=True)
    publisher = serializers.CharField(source='publisher.username')

    class Meta:
        model = Comment
        list_serializer_class = FilterParentSerializer
        fields = [
            'id',
            'create_at',
            'hidden',
            'author',
            'publisher',
            'content',
            'recomments'
        ]


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)
    publisher = serializers.CharField(source='publisher.username')

    class Meta:
        model = Post
        fields = [
            'id',
            'create_at',
            'active',
            'title',
            'author',
            'publisher',
            'content',
            'comments'
        ]
