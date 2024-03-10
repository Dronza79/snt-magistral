from django.conf import settings
from django.db.models import *


class Post(Model):
    create_at = DateTimeField(auto_now_add=True, verbose_name='Создан')
    edit_at = DateTimeField(auto_now_add=True, verbose_name='Отредактирован')
    active = BooleanField(default=True, verbose_name='Статус', help_text="Открыт или закрыт")
    hidden = BooleanField(default=False, verbose_name='Скрыт', help_text="Скрытие модератором")
    author = CharField(max_length=255, verbose_name='Автор')
    publisher = ForeignKey(settings.AUTH_USER_MODEL, on_delete=CASCADE, verbose_name='Аккаунт')
    title = CharField(max_length=255, verbose_name='Заголовок', default='заголовок')
    content = TextField(verbose_name='Содержание')

    def __str__(self):
        return f'пост {self.title}'


class Comment(Model):
    create_at = DateTimeField(auto_now_add=True, verbose_name='Создан')
    edit_at = DateTimeField(auto_now_add=True, verbose_name='Отредактирован')
    post = ForeignKey(Post, on_delete=CASCADE, verbose_name='Топикстартер', related_name='comments')
    comment = ForeignKey('self',
                         on_delete=CASCADE,
                         blank=True,
                         null=True,
                         related_name='recomments',
                         verbose_name='Ответ на...')
    hidden = BooleanField(default=False, verbose_name='Скрыт', help_text="Скрытие модератором")
    author = CharField(max_length=255, verbose_name='Автор')
    publisher = ForeignKey(settings.AUTH_USER_MODEL, on_delete=CASCADE, verbose_name='Аккаунт')
    content = TextField(verbose_name='Содержание')

    def __str__(self):
        return f'коммент {self.id} на {self.comment.id if self.comment else self.post}'
