from rest_framework.generics import ListAPIView

from .models import Advertisement
from .serializer import AdvertisementSerializer


class NewsAPIView(ListAPIView):
    serializer_class = AdvertisementSerializer
    queryset = Advertisement.objects.filter(state_news__icontains='public')
