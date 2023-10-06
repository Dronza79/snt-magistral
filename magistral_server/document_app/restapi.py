from rest_framework.generics import ListAPIView

from site_settings.models import DocumentMenu
from .models import Document
from .serializer import DocumentSerializer
from .utils import get_list_id_items


class DocumentListView(ListAPIView):
    serializer_class = DocumentSerializer

    def get_queryset(self, **kwargs):
        # menu = DocumentMenu.objects.get(pk=self.kwargs.get('pk'))
        # cat = [sub.pk for sub in menu.submenu.all()]
        print(get_list_id_items(self.kwargs.get('pk')))

        return DocumentMenu.objects.get(pk=self.kwargs.get('pk')).documents.all()
