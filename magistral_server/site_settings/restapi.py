from rest_framework.generics import ListAPIView

from .models import SiteSettings
from .serializer import SiteSettingsSerializer


class SettingsView(ListAPIView):
    queryset = SiteSettings.objects.all()
    serializer_class = SiteSettingsSerializer

