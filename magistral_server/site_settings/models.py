import re

from django.contrib import admin
from django.db import models
from django.utils.safestring import mark_safe
from transliterate import translit, slugify

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


class DocumentMenu(models.Model):
    title = models.CharField(max_length=100, db_index=True, verbose_name='Название')
    slug = models.SlugField(max_length=50, unique=True, verbose_name="URL пункта меню")
    parent = models.ForeignKey(
        'self',
        on_delete=models.PROTECT,
        null=True,
        blank=True,
        related_name='submenu',
        verbose_name='Родительская категория'
    )
    image = models.ForeignKey(
        'DocumentImage',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="item_menu"
    )

    class Meta:
        ordering = ['title']
        verbose_name = "Пункт"
        verbose_name_plural = "Пункты меню"

    def __str__(self):
        return self.title

    # def save(self, *args, **kwargs):
    #     if not self.slug:
    #         if not re.fullmatch(r'[а-яА-ЯёЁ]+', self.title):
    #             self.slug = slugify(translit(self.title, 'ru'))
    #         else:
    #             self.slug = slugify(self.title)
    #     return super().save(*args, **kwargs)

    @admin.display(description='Изображение')
    def get_icon(self):
        if self.image:
            return mark_safe(f'<img width="50" src={self.image.src.url}>')
        else:
            return '==//=='

    @admin.display(description='Относительный путь')
    def href(self):
        return f'/documents/{self.slug}/'


class DocumentImage(models.Model):
    src = models.FileField(upload_to='category/', verbose_name='Выбор файла')
    alt = models.CharField(max_length=150, blank=True)

    def save(self, *args, **kwargs):
        if not self.alt:
            self.alt = 'Иконка ' + str(self.src.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.alt
