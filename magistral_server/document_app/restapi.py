from rest_framework.generics import ListAPIView

from site_settings.models import DocumentMenu
from .models import Document
from .serializer import DocumentSerializer
from .utils import get_list_id_items


class DocumentListView(ListAPIView):
    serializer_class = DocumentSerializer

    def get_queryset(self, **kwargs):
        menu_list = get_list_id_items(self.kwargs.get('pk'))
        qs = Document.objects.all().filter(category__in=menu_list)
        return qs if self.request.auth else qs.filter(is_public=True)
