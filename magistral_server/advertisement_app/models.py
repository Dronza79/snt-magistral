from django.db import models


class Advertisement(models.Model):
    TAG_CHO = [
        ('notification', 'Уведомление'),
        ('important', 'Важно'),
    ]
    create_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    edit_at = models.DateTimeField(auto_now=True, verbose_name='Дата редактирования')
    pub_date = models.DateTimeField('Опубликовано', blank=True, null=True)
    editor = models.CharField('Отредактировал', max_length=255, blank=True)
    autor = models.CharField('Автор', max_length=255, default='Правление СНТ')
    tag_news = models.CharField(max_length=12, choices=TAG_CHO, verbose_name="Пометка", blank=True, default="")
    title_news = models.CharField('Заголовок объявления', max_length=255)
    content_news = models.TextField()

    def __str__(self):
        return f'news{self.create_at}'

    class Meta:
        ordering = ['pub_date']
        verbose_name = 'Объявление'
        verbose_name_plural = 'Объявления'


def get_file_storage_path(inst, filename):
    return f'{inst.news}/{filename}'


class FileNews(models.Model):
    file_name = models.CharField(verbose_name='Название файла', max_length=255)
    file_descr = models.CharField(verbose_name='Описание файла', max_length=255, blank=True)
    news = models.ForeignKey(Advertisement, related_name='file_news', on_delete=models.CASCADE)
    file = models.FileField(upload_to=get_file_storage_path)
