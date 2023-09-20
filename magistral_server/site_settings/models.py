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


class DocumentMenu(models.Model):
    title = models.CharField(max_length=100, db_index=True, verbose_name='Название')
    slug = models.SlugField(max_length=50, unique=True, verbose_name="URL пункта меню")
    left = models.IntegerField(blank=True, null=True)
    right = models.IntegerField(blank=True, null=True)
    position = models.IntegerField(verbose_name=u'Позиция', blank=True, null=True)
    level = models.IntegerField(blank=True, null=True)
    published = models.BooleanField(verbose_name=u'Опубликован', default=True)
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
        ordering = [
            # 'position',
            # 'left',
            'title',
        ]
        verbose_name = "Пункт"
        verbose_name_plural = "Пункты меню"

    def __str__(self):
        level = self.level if self.level else 1
        i = '| ' if level > 1 else ''
        return ('|--' * (level - 1)) + i + self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.set_mptt()

    def set_mptt(
            self,
            left=1,
            parent=None,
            level=1,
    ):
        # for menu in type(self).objects.filter(parent=parent).order_by('position'):
        print(f'{type(self).objects.filter(parent=parent)=}')
        for i, menu in enumerate(type(self).objects.filter(parent=parent).select_related('parent'), start=1):
            # obj, children_count = menu, 0
            # while obj.submenu.exists():
            #     for child in obj.submenu.all():
            #         children_count += 1
            #         obj = child
            pos = menu.position if menu.position else i
            print(f'{menu=} {pos=}')
            menu.submenu.all().update(position=pos)
            children_count = menu.submenu.count()
            data = {
                'level': level,
                'left': left,
                'right': left + (children_count * 2) + 1,
                'position': i,
            }
            type(self).objects.filter(id=menu.id).update(**data)
            print(f'{type(self).objects.filter(id=menu.id)=}')
            left = (data['right'] + 1)
            menu.set_mptt(left=data['left'] + 1, parent=menu.id, level=data['level'] + 1,)

    @admin.display(description='Изображение')
    def get_icon(self):
        if self.image:
            return mark_safe(f'<img width="50" src={self.image.src.url}>')
        else:
            return '-/-'

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
