from django.urls import reverse
from django.utils import timezone

from voting_app.models import Protocol


class CheckMeetingProtocolsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        obj = Protocol
        if request.path in (reverse('protocols_list'),
                            f'/admin/{obj._meta.app_label}/{obj._meta.model_name}/'):
            (obj.objects
             .filter(close_event__lt=timezone.now(), status='open')
             .update(status='close'))
        response = self.get_response(request)
        return response
