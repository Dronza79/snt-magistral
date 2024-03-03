import datetime

from django.contrib import admin
from django.contrib.auth.models import User
from django.db.models import *


class MeetingProtocol(Model):
    title = CharField(verbose_name='Название протокола', max_length=255)
    date_event = DateField(verbose_name='Дата проведения')
    time_event = TimeField(verbose_name='Время проведения', default=datetime.time())
    agenda = TextField(verbose_name='Содержание повестки', blank=True, null=True, help_text="Не обязательно")

    class Meta:
        verbose_name = "Протокол собрания"
        verbose_name_plural = 'Протоколы собрания'

    def __str__(self):
        return self.title

    @admin.display(description='Вопросов на голосовании')
    def count_issue(self):
        return self.questions.count()


class Issue(Model):
    title = CharField(verbose_name='Содержание вопроса', max_length=255)
    meeting = ForeignKey(MeetingProtocol, on_delete=CASCADE, verbose_name='Протокол', related_name='questions')

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


class Vote(Model):
    question = ForeignKey(Issue, on_delete=CASCADE, related_name='votes', verbose_name='Рассматриваемый вопрос')
    owner = ForeignKey(User, on_delete=CASCADE, related_name='votes', verbose_name='Участник')
    choice = BooleanField(verbose_name=' Результат выбора')

    class Meta:
        constraints = [UniqueConstraint(fields=['question', 'owner'], name='unique_vote')]
        verbose_name = "Голос"
        verbose_name_plural = 'Голоса'

    def __str__(self):
        return str(self.choice)
