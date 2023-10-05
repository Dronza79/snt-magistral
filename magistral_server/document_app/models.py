from django.core.validators import FileExtensionValidator
from django.db import models

from .utils import get_html_string


class Document(models.Model):
    file_validator = FileExtensionValidator(
        allowed_extensions=['docx', 'jpg', 'xlsx'],
        message='Файл не поддерживается. Разрешенные расширения .jpg .docx .xlsx')

    category = models.ForeignKey(
        "site_settings.DocumentMenu",
        on_delete=models.CASCADE,
        verbose_name='Пункт меню',
        related_name='documents'
    )
    create_at = models.DateTimeField(auto_now=True, verbose_name='Создано')
    update_at = models.DateTimeField(auto_now_add=True, verbose_name='Изменено')
    title = models.CharField(max_length=255, verbose_name='Название документа')
    content = models.TextField(
        verbose_name='Содержание документа (в html)',
        blank=True,
        help_text="Может быть заполнено автоматически при загрузке документов в формате docx или xlsx"
    )
    doc_files = models.FileField(
        upload_to='doc/%Y/%B/',
        verbose_name='Файл в формате .docx, .xlsx или .jpg',
        blank=True,
        validators=[file_validator],
    )
    is_public = models.BooleanField(default=False, verbose_name='Публично')

    class Meta:
        verbose_name = "Документ"
        verbose_name_plural = "Документы и отчетность"

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.content and self.doc_files:
            self.content = get_html_string(self.doc_files.file)
        super().save(*args, **kwargs)
