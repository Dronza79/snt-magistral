# Generated by Django 4.1.3 on 2023-09-25 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_settings', '0007_alter_documentmenu_order'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='documentmenu',
            options={'ordering': ['order'], 'verbose_name': 'Пункт', 'verbose_name_plural': 'Пункты меню'},
        ),
        migrations.RemoveField(
            model_name='documentmenu',
            name='published',
        ),
        migrations.AddField(
            model_name='documentmenu',
            name='is_public',
            field=models.BooleanField(default=True, verbose_name='Публично'),
        ),
    ]
