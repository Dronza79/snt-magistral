from rest_framework import serializers

from .models import SiteSettings, DocumentImage, DocumentMenu


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        exclude = 'id',


class FilterAuthSerializer(serializers.ListSerializer):
    def to_representation(self, data):
        if self.context.get("request").user.is_anonymous:
            data = data.filter(is_public=True)
        return super().to_representation(data)


class RecursiveMenuSerializer(serializers.Serializer):
    class Meta:
        list_serializer_class = FilterAuthSerializer

    def to_representation(self, instance):
        ser = self.parent.parent.__class__(instance, context=self.context)
        return ser.data


class FilterParentSerializer(serializers.ListSerializer):
    def to_representation(self, data):
        data = data.filter(parent=None)
        if self.context.get("request").user.is_anonymous:
            data = data.filter(is_public=True)
        return super().to_representation(data)


class IconSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentImage
        fields = ['src', 'alt']


class DocumentsMenuSerializer(serializers.ModelSerializer):
    submenu = RecursiveMenuSerializer(many=True)
    image = IconSerializer()

    class Meta:
        list_serializer_class = FilterParentSerializer
        model = DocumentMenu
        fields = ['id', 'is_public', 'title', 'position', 'image', 'href', 'submenu']
