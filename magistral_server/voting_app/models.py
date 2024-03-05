import datetime

from django.conf import settings
from django.contrib import admin
from django.db.models import *
from django.utils import timezone
from django.utils.html import format_html


class MeetingProtocol(Model):
    STATUS_CHOICE = (('open', 'Открыт'), ('close', 'Закрыт'))
    number = SmallIntegerField(verbose_name='Номер документа')
    title = CharField(
        verbose_name='Название документа',
        max_length=255,
        default='Протокол голосования с применением технических средств')
    start_event = DateTimeField(verbose_name='Дата проведения', default=timezone.now)
    close_event = DateTimeField(verbose_name='Дата закрытия', default=timezone.now() + datetime.timedelta(7))
    agenda = TextField(verbose_name='Повестка', blank=True, null=True, help_text="Не обязательно")
    status = CharField(verbose_name='Состояние', max_length=5, choices=STATUS_CHOICE, default='open')

    class Meta:
        verbose_name = "Протокол голосования"
        verbose_name_plural = 'Протоколы голосования'

    def __str__(self):
        return f'{self.title[:8]} №{self.number}'

    @admin.display(description='Вопросов на голосовании')
    def count_issue(self):
        count = self.questions.count()
        suffix = "ов" if count > 4 or count == 0 else 'а'
        return str(count) + " вопрос" + (suffix if count != 1 else '')

    @admin.display(description='Проголосовало')
    def count_vote(self):
        return int(self.votes.count() / self.questions.count())

    def save(self, **kwargs):
        if not self.number:
            self.number = type(self).objects.count() + 1
        return super().save(**kwargs)


class Issue(Model):
    protocol = ForeignKey(MeetingProtocol, on_delete=CASCADE, verbose_name='Протокол', related_name='questions')
    title = CharField(verbose_name='Суть вопроса', max_length=255)
    description = TextField(blank=True, verbose_name='Дополнительные пояснения', help_text="Не обязательно")
    answers = ManyToManyField('Answer', verbose_name='Варианты ответов')

    class Meta:
        verbose_name = "Вопрос для голосования"
        verbose_name_plural = 'Вопросы для голосования'
        ordering = 'pk',

    def __str__(self):
        return f'{self.protocol}:{self.title}'

    # def count_vote(self):
    #     self.amount_votes = self.votes.count()
    #     return self.amount_votes

    @admin.display(description='Варианты ответов')
    def show_answer_options(self):
        return format_html('<br>'.join(item.name for item in self.answers.all()))

    def count_part_votes(self, value):
        amount = self.votes.filter(value__name=value).count()
        # return f'{amount} ({(amount / self.amount_votes * 100) if self.amount_votes else 0:.1f}%)\n'
        return f'{amount} ({(amount / self.votes.count() * 100) if self.votes.count() else 0:.1f}%)\n'

    @admin.display(description='Результаты голосования')
    def voting_results(self):
        return format_html('<br>'.join(self.count_part_votes(anwr.name) for anwr in self.answers.all()))


class Answer(Model):
    name = CharField(max_length=255, verbose_name="Значение ответа")

    def __str__(self):
        return self.name[:30]


class Vote(Model):
    protocol = ForeignKey(MeetingProtocol, on_delete=CASCADE, verbose_name='Протокол', related_name='votes')
    question = ForeignKey(Issue, on_delete=CASCADE, related_name='votes', verbose_name='Вопрос')
    owner = ForeignKey(settings.AUTH_USER_MODEL, on_delete=CASCADE, related_name='votes', verbose_name='Участник')
    value = ForeignKey(Answer, on_delete=CASCADE, related_name='votes', verbose_name='Значение')
    create_at = DateTimeField(
        auto_now_add=True, verbose_name="Дата и время голоса")

    class Meta:
        constraints = [UniqueConstraint(fields=['protocol', 'question', 'owner'], name='unique_vote')]
        verbose_name = "Голос"
        verbose_name_plural = 'Голоса'

    def __str__(self):
        return f'{self.question}: {self.value}'
