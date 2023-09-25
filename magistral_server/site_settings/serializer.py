from rest_framework import serializers

from .models import SiteSettings, DocumentImage, DocumentMenu


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        exclude = 'id',


class RecursiveSerializer(serializers.Serializer):
    def to_representation(self, instance):
        ser = self.parent.parent.__class__(instance, context=self.context)
        return ser.data


class FilterSerializer(serializers.ListSerializer):
    def to_representation(self, data):
        data = data.filter(parent=None)
        return super().to_representation(data)


class IconSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentImage
        fields = ['src', 'alt']


class DocumentsMenuSerializer(serializers.ModelSerializer):
    submenu = RecursiveSerializer(many=True)
    image = IconSerializer()

    class Meta:
        list_serializer_class = FilterSerializer
        model = DocumentMenu
        fields = ['id', 'is_public', 'title', 'position', 'image', 'href', 'submenu']
