from django.db import models


class News(models.Model):
    TAG_CHO = [
        ('notification', 'Уведомление'),
        ('important', 'Важно'),
    ]
    create_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    edit_at = models.DateTimeField(auto_now=True, verbose_name='')
    pub_date = models.DateTimeField('Опубликовано', blank=True, null=True)
    editor = models.CharField('Отредактировал', max_length=255, blank=True)
    autor = models.CharField('Автор', max_length=255)
    tag_news = models.CharField(max_length=12, choices=TAG_CHO, verbose_name="Пометка", blank=True, default="")
    title_news = models.CharField('Заголовок новости', max_length=255)
    content_news = models.TextField()


# class Government(SingletonModel):
#     pass