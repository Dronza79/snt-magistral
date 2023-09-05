from django.contrib import admin
from django.db import models
from django.utils.timezone import localtime


class Advertisement(models.Model):
    class Meta:
        ordering = ['pub_date']
        verbose_name = 'Объявление'
        verbose_name_plural = 'Объявления'

    TAG_CHO = [
        ('notification', 'Уведомление'),
        ('important', 'Важно'),
        ('message', 'Сообщение'),
    ]
    CHOICE_STATUS = [
        ('public', 'Опубликовано'),
        ('hidden', 'Скрыто'),
    ]
    create_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    pub_date = models.DateTimeField('Дата публикации', blank=True, null=True)
    state_news = models.CharField(max_length=6, choices=CHOICE_STATUS, verbose_name='Опубликовано', default='hidden')
    autor = models.CharField('Автор', max_length=255, default='Правление СНТ')
    tag_news = models.CharField(max_length=12, choices=TAG_CHO, verbose_name="Пометка", default="message")
    title_news = models.CharField('Заголовок объявления', max_length=255)
    content_news = models.TextField()

    def __str__(self):
        return f'{self.get_small_title()} {self.create_at.strftime("%d-%m-%Y %H:%M")}'

    def save(self, **kwargs):
        if self.state_news == 'public':
            self.pub_date = localtime()
        else:
            self.pub_date = None
        return super().save(**kwargs)

    @admin.display(description='Короткий заголовок')
    def get_small_title(self):
        data = self.title_news
        return (data[:50] + '...') if len(data) > 50 else data

    @admin.display(description='Файлы')
    def get_files_count(self):
        return f'{self.file_news.count()} файл(ов)'


def get_file_storage_path(inst, filename):
    return f'{inst.news.id}-{inst.news.create_at.strftime("%d-%m-%Y_%H-%M")}/{filename}'


class FileNews(models.Model):
    file_name = models.CharField(verbose_name='Название файла', max_length=255)
    file_descr = models.CharField(verbose_name='Описание файла', max_length=255, blank=True)
    news = models.ForeignKey(Advertisement, related_name='file_news', on_delete=models.CASCADE)
    file = models.FileField(upload_to=get_file_storage_path)

    def __str__(self):
        return f'{self.file_name}'
