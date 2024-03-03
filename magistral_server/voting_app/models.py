import datetime

from django.contrib import admin
from django.contrib.auth.models import User
from django.db.models import *
from django.utils import timezone


class MeetingProtocol(Model):
    STATUS_CHOICE = (('open', 'Открыт'), ('close', 'Закрыт'))
    title = CharField(verbose_name='Название протокола', max_length=255)
    date_event = DateField(verbose_name='Дата проведения', default=timezone.now)
    time_event = TimeField(verbose_name='Время проведения', default=datetime.time())
    close_through = DateTimeField(verbose_name='Дата закрытия', default=datetime.datetime.now() + datetime.timedelta(7))
    agenda = TextField(verbose_name='Повестка', blank=True, null=True, help_text="Не обязательно")
    status = CharField(verbose_name='Состояние', max_length=5, choices=STATUS_CHOICE, default='open')
    questions = ManyToManyField('Issue', through='AnswerOption')

    class Meta:
        verbose_name = "Протокол собрания"
        verbose_name_plural = 'Протоколы собрания'

    def __str__(self):
        return self.title

    @admin.display(description='Вопросов на голосовании')
    def count_issue(self):
        # count = self.questions.count()
        count = self.options.count()
        suffix = "ов" if count > 4 or count == 0 else 'а'
        return str(count) + " вопрос" + (suffix if count != 1 else '')


class Issue(Model):
    title = CharField(verbose_name='Название вопроса', max_length=255)
    description = TextField(blank=True, verbose_name='Содержание вопроса', help_text="Не обязательно")
    # meeting = ForeignKey(MeetingProtocol, on_delete=CASCADE, verbose_name='Протокол', related_name='questions')
    answer = ManyToManyField('Answer', through='AnswerOption', verbose_name='Варианты ответов')

    class Meta:
        verbose_name = "Вопрос для голосования"
        verbose_name_plural = 'Вопросы для голосования'

    def __str__(self):
        return self.title

    @admin.display(description='Проголосовало')
    def count_vote(self):
        return self.votes.count()

    @admin.display(description='Проголосовавших "ЗА"')
    def count_vote_true(self):
        amount = self.votes.filter(choice=True).count()
        total = self.count_vote()
        return f'{amount} ({(amount / total * 100) if total else 0:.1f}%)'

    @admin.display(description='Проголосовавших "ПРОТИВ"')
    def count_vote_false(self):
        amount = self.votes.filter(choice=False).count()
        total = self.count_vote()
        return f'{amount} ({(amount / total * 100) if total else 0:.1f}%)'


class Answer(Model):
    name = CharField(max_length=255, verbose_name="Номер ответа")

    def __str__(self):
        return self.name[:30]


class AnswerOption(Model):
    protocol = ForeignKey(MeetingProtocol, on_delete=CASCADE, related_name='options')
    issue = ForeignKey(Issue, on_delete=CASCADE, related_name='options', verbose_name='Вопрос для голосования')
    name = ForeignKey(Answer, on_delete=CASCADE, related_name='options', verbose_name='Номер ответа')
    value = CharField(max_length=255, verbose_name="Ответ")

    class Meta:
        verbose_name = "Вариант голосования"
        verbose_name_plural = 'Варианты голосования'

    def __str__(self):
        return self.value[:30]


class Vote(Model):
    question = ForeignKey(Issue, on_delete=CASCADE, related_name='votes', verbose_name='Рассматриваемый вопрос')
    owner = ForeignKey(User, on_delete=CASCADE, related_name='votes', verbose_name='Участник')
    choice = ForeignKey(AnswerOption, on_delete=CASCADE, related_name='votes', verbose_name='Выбор')
    create_at = DateTimeField(
        auto_now_add=True, verbose_name="Дата и время голосования")

    class Meta:
        constraints = [UniqueConstraint(fields=['question', 'owner'], name='unique_vote')]
        verbose_name = "Голос"
        verbose_name_plural = 'Голоса'

    def __str__(self):
        return str(self.choice)
