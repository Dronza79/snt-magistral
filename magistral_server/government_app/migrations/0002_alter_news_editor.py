# Generated by Django 4.1.3 on 2023-08-30 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('government_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='editor',
            field=models.CharField(blank=True, max_length=255, verbose_name='Отредактировал'),
        ),
    ]