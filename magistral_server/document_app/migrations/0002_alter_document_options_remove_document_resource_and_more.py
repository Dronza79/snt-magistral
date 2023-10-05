# Generated by Django 4.1.3 on 2023-10-05 19:57

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('document_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='document',
            options={'verbose_name': 'Документ', 'verbose_name_plural': 'Документы и отчетность'},
        ),
        migrations.RemoveField(
            model_name='document',
            name='resource',
        ),
        migrations.AddField(
            model_name='document',
            name='content',
            field=models.TextField(blank=True, help_text='Может быть заполнено автоматически при загрузке документов в формате docx или xlsx', verbose_name='Содержание документа (в html)'),
        ),
        migrations.AlterField(
            model_name='document',
            name='doc_files',
            field=models.FileField(blank=True, upload_to='doc/%Y/%B/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['docx', 'jpg', 'xlsx'], message='Файл не поддерживается. Разрешенные расширения .jpg .docx .xlsx')], verbose_name='Файл в формате .docx, .xlsx или .jpg'),
        ),
        migrations.AlterField(
            model_name='document',
            name='title',
            field=models.CharField(max_length=255, verbose_name='Название документа'),
        ),
    ]
