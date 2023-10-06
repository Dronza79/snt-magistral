import re

from django.contrib import admin
from django.db import models
from django.utils.safestring import mark_safe
# from transliterate import translit, slugify

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


class PublishedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(published=True)


class DocumentMenu(models.Model):
    title = models.CharField(max_length=100, db_index=True, verbose_name='Название')
    slug = models.SlugField(max_length=50, unique=True, verbose_name="URL пункта меню")
    order = models.CharField(blank=True, null=True, max_length=10, verbose_name='Порядок пунктов')
    level = models.IntegerField(blank=True, null=True, verbose_name='Уровень вложенности')
    position = models.IntegerField(verbose_name='Позиция', blank=True, null=True, default=99)
    is_public = models.BooleanField(verbose_name='Публично', default=True)
    parent = models.ForeignKey(
        'self',
        on_delete=models.PROTECT,
        null=True,
        blank=True,
        related_name='submenu',
        verbose_name='Родительская категория',
        limit_choices_to={'level__lt': 3},
    )
    image = models.ForeignKey(
        'DocumentImage',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="item_menu"
    )

    class Meta:
        ordering = ['order']
        verbose_name = "Пункт"
        verbose_name_plural = "Пункты меню"

    def __str__(self):
        level = self.level if self.level else 1
        return ('...' * (level - 1)) + self.title[:25]

    @admin.display(description='Наименование')
    def admin_representation(self):
        level = self.level if self.level else 1
        stri = '   ' * level
        return mark_safe(f'<pre>{stri}{self.title}</pre>')

    @admin.display(description='Кол-во документов')
    def show_how_many_includes(self):
        return self.documents.count()

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        query_pra = type(self).objects.filter(parent=None)
        self.set_mptt(queryset=query_pra)

    def set_mptt(self, queryset=None, level=1):
        for i, menu in enumerate(queryset.order_by('position'), start=1):
            order_str = (
                f'{i}00' if not menu.parent else
                f'{menu.parent.position}{i}0' if level == 2 else
                f'{menu.parent.parent.position}{menu.parent.position}{i}')
            queryset.filter(pk=menu.pk).update(level=level, order=order_str, position=i)
            if menu.submenu.exists():
                qs = menu.submenu.all()
                menu.set_mptt(level=level + 1, queryset=qs)

    @admin.display(description='Иконка')
    def get_icon(self):
        if self.image:
            return mark_safe(f'<img width="50" src={self.image.src.url}>')
        else:
            return 'None'

    @admin.display(description='Относительный путь')
    def href(self):
        return (f'{self.parent.parent.slug}/{self.parent.slug}/{self.slug}/' if self.parent.parent
                else f'{self.parent.slug}/{self.slug}/') if self.parent else f'{self.slug}/'


class DocumentImage(models.Model):
    src = models.FileField(upload_to='category/', verbose_name='Выбор файла')
    alt = models.CharField(max_length=150, blank=True)

    def save(self, *args, **kwargs):
        self.alt = 'ico ' + self.__str__().split('.')[0]
        super().save(*args, **kwargs)

    def __str__(self):
        return self.src.name.split('/')[1]
