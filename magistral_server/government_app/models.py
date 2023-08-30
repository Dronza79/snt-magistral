from django.db import models


class News(models.Model):
    create_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    edit_at = models.DateTimeField(auto_now=True, verbose_name='')
    pub_date = models.DateTimeField('Опубликовано')
    editor = models.CharField('Отредактировал')
    autor = models.CharField('Автор')
    title_news = models.CharField('Заголовок новости')
    content_news = models.TextField()
