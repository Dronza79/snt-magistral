# Generated by Django 4.1.3 on 2024-03-02 22:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voting_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='issue',
            options={'verbose_name': 'Вопрос для голосования', 'verbose_name_plural': 'Вопросы для голосования'},
        ),
        migrations.AlterField(
            model_name='vote',
            name='choice',
            field=models.BooleanField(verbose_name=' Результат выбора'),
        ),
    ]
