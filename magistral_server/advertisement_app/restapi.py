from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Advertisement
from .serializer import AdvertisementSerializer


class ListNewsAPIView(ListAPIView):
    serializer_class = AdvertisementSerializer

    def get_queryset(self):
        return Advertisement.objects.filter(state_news__icontains='public')


class DetailNewsAPIView(RetrieveAPIView):
    serializer_class = AdvertisementSerializer

    def get_queryset(self):
        return Advertisement.objects.filter(state_news__icontains='public')
