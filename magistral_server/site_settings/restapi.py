from rest_framework.generics import RetrieveAPIView, ListAPIView

from .models import SiteSettings, DocumentMenu
from .serializer import SiteSettingsSerializer, DocumentsMenuSerializer


class SettingsView(RetrieveAPIView):
    serializer_class = SiteSettingsSerializer

    def get_object(self):
        return SiteSettings.objects.first()


class DocumentMenuListView(ListAPIView):
    serializer_class = DocumentsMenuSerializer

    def get_queryset(self):
        return DocumentMenu.objects.all().select_related()
