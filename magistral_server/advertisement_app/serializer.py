from rest_framework import serializers

from .models import Advertisement, FileNews


class FileNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileNews
        fields = ['file_name', 'file_descr', 'file']


class AdvertisementSerializer(serializers.ModelSerializer):
    file_news = FileNewsSerializer(many=True, read_only=True)

    class Meta:
        model = Advertisement
        fields = ['pub_date', 'autor', 'tag_news', 'title_news', 'content_news', 'file_news']

