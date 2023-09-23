# Generated by Django 4.1.3 on 2023-09-21 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_settings', '0005_alter_documentmenu_options_documentmenu_left_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='documentmenu',
            options={'ordering': ['order_parent', 'level', 'position'], 'verbose_name': 'Пункт', 'verbose_name_plural': 'Пункты меню'},
        ),
        migrations.RemoveField(
            model_name='documentmenu',
            name='left',
        ),
        migrations.RemoveField(
            model_name='documentmenu',
            name='right',
        ),
        migrations.AddField(
            model_name='documentmenu',
            name='order',
            field=models.IntegerField(blank=True, null=True, verbose_name='Порядок пунктов'),
        ),
        migrations.AddField(
            model_name='documentmenu',
            name='order_parent',
            field=models.IntegerField(blank=True, null=True, verbose_name='Порядок прародителя'),
        ),
        migrations.AlterField(
            model_name='documentmenu',
            name='level',
            field=models.IntegerField(blank=True, null=True, verbose_name='Уровень вложенности'),
        ),
        migrations.AlterField(
            model_name='documentmenu',
            name='published',
            field=models.BooleanField(default=True, verbose_name='Состояние публикации'),
        ),
    ]
