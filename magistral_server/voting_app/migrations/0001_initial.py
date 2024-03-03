# Generated by Django 4.1.3 on 2024-03-02 21:52

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Содержание вопроса')),
            ],
            options={
                'verbose_name': 'Тема для голосования',
                'verbose_name_plural': 'Темы для голосования',
            },
        ),
        migrations.CreateModel(
            name='MeetingProtocol',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название протокола')),
                ('date_event', models.DateField(verbose_name='Дата проведения')),
                ('time_event', models.TimeField(default=datetime.time(0, 0), verbose_name='Время проведения')),
                ('agenda', models.TextField(blank=True, help_text='Не обязательно', null=True, verbose_name='Содержание повестки')),
            ],
            options={
                'verbose_name': 'Протокол собрания',
                'verbose_name_plural': 'Протоколы собрания',
            },
        ),
        migrations.CreateModel(
            name='Vote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('choice', models.BooleanField(verbose_name='')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='votes', to=settings.AUTH_USER_MODEL, verbose_name='Участник')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='votes', to='voting_app.issue', verbose_name='Рассматриваемый вопрос')),
            ],
            options={
                'verbose_name': 'Голос',
                'verbose_name_plural': 'Голоса',
            },
        ),
        migrations.AddField(
            model_name='issue',
            name='meeting',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='voting_app.meetingprotocol', verbose_name='Протокол'),
        ),
        migrations.AddConstraint(
            model_name='vote',
            constraint=models.UniqueConstraint(fields=('question', 'owner'), name='unique_vote'),
        ),
    ]
