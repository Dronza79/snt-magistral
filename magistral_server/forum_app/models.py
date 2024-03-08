from django.conf import settings
from django.db.models import *


class Post(Model):
    create_at = DateTimeField(auto_now_add=True, verbose_name='')
    edit_at = DateTimeField(auto_now_add=True, verbose_name='')
    active = BooleanField(default=True, verbose_name='')
    hidden = BooleanField(default=True, verbose_name='')
    author = CharField(max_length=255, verbose_name='')
    publisher = ForeignKey(settings.AUTH_USER_MODEL, on_delete=CASCADE, verbose_name='')
    content = TextField(verbose_name='')


class Comment(Model):
    create_at = DateTimeField(auto_now_add=True, verbose_name='')
    edit_at = DateTimeField(auto_now_add=True, verbose_name='')
    post = ForeignKey(Post, on_delete=CASCADE, verbose_name='')
    comment = ForeignKey('self', on_delete=CASCADE, blank=True, related_name='recoment', verbose_name='')
    hidden = BooleanField(default=True, verbose_name='')
    author = CharField(max_length=255, verbose_name='')
    publisher = ForeignKey(settings.AUTH_USER_MODEL, on_delete=CASCADE, verbose_name='')
    content = TextField(verbose_name='')
