from rest_framework.generics import RetrieveAPIView

from .models import SiteSettings
from .serializer import SiteSettingsSerializer


class SettingsView(RetrieveAPIView):
    serializer_class = SiteSettingsSerializer

    def get_object(self):
        return SiteSettings.objects.first()

