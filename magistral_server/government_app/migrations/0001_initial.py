# Generated by Django 4.1.3 on 2023-09-02 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
                ('edit_at', models.DateTimeField(auto_now=True, verbose_name='')),
                ('pub_date', models.DateTimeField(blank=True, null=True, verbose_name='Опубликовано')),
                ('editor', models.CharField(blank=True, max_length=255, verbose_name='Отредактировал')),
                ('autor', models.CharField(max_length=255, verbose_name='Автор')),
                ('tag_news', models.CharField(blank=True, choices=[('notification', 'Уведомление'), ('important', 'Важно')], default='', max_length=12, verbose_name='Пометка')),
                ('title_news', models.CharField(max_length=255, verbose_name='Заголовок новости')),
                ('content_news', models.TextField()),
            ],
        ),
    ]
