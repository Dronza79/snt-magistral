from django.db import models

from .singleton_model import SingletonModel


class SiteSettings(SingletonModel):
    site_url = models.URLField(verbose_name='Адрес сайта', max_length=255, blank=True)
    site_title = models.CharField(verbose_name='Заголовок сайта', max_length=255, blank=True)
    site_email = models.EmailField(verbose_name='Официальная почта', max_length=255, blank=True)
    site_social = models.URLField(verbose_name='Адрес VK', max_length=255, blank=True)
    site_telegram = models.URLField(verbose_name='Адрес ТГ', max_length=255, blank=True)
    site_postal = models.CharField(verbose_name='Почтовый адрес', max_length=255, blank=True)
    site_inn = models.CharField(max_length=10, verbose_name='ИНН', blank=True)
    site_kpp = models.CharField(max_length=9, verbose_name='КПП', blank=True)
    site_bank = models.CharField(max_length=255, verbose_name='Юр. адрес банка', blank=True)
    correspondent_account = models.CharField(max_length=20, verbose_name='Кор. счет', blank=True)
    site_bik = models.CharField(max_length=9, verbose_name='БИК', blank=True)
    payment_account = models.CharField(max_length=20, verbose_name='Расчетный. счет', blank=True)

    def __str__(self):
        return 'Значения'

    class Meta:
        verbose_name = "Конфигурация"
        verbose_name_plural = "Конфигурации"
