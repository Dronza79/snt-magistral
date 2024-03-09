"""magistral_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import index
from .yasg import urlpatterns as doc_urls

urlpatterns = [
    path('', index, name='home'),
    path('admin/', admin.site.urls),
    path('', include('site_settings.urls')),
    path('', include('advertisement_app.urls')),
    path('', include('document_app.urls')),
    path('', include('voting_app.urls')),
    path('', include('forum_app.urls')),
    path('', include('rest_framework.urls', namespace='rest_framework')),  # добавлена форма авторизации в АПИ
    path('api/auth/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('favicon.ico', RedirectView.as_view(url='/static/img/favicon.ico'), name='favicon')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += doc_urls
