from django.contrib import admin

from .models import *


class AnswerOptionInline(admin.TabularInline):
    model = AnswerOption
    extra = 0


class IssueInline(admin.TabularInline):
    # model = Issue.answer.through
    model = MeetingProtocol.questions.through
    extra = 0
    # inlines = [AnswerOptionInline]
    # filter_horizontal = "answer",


@admin.register(MeetingProtocol)
class MeetingProtocolAdmin(admin.ModelAdmin):
    ordering = ['-date_event', '-time_event']
    list_display = ['title', 'date_event', 'time_event', 'count_issue', 'close_through', 'status']
    list_display_links = ['title']
    list_editable = ['date_event', 'time_event', 'close_through', 'status']
    inlines = [IssueInline]


@admin.register(Issue)
class IssueAdmin(admin.ModelAdmin):
    # ordering = ['-meeting']
    # list_display = ['title', 'meeting']
    list_display = ['title']
    list_display_links = ['title']
    filter_horizontal = "answer",
    inlines = [AnswerOptionInline]


@admin.register(AnswerOption)
class AnswerOptionAdmin(admin.ModelAdmin):
    def get_model_perms(self, request):
        return {}


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    def get_model_perms(self, request):
        return {}


@admin.register(Vote)
class VoteAdmin(admin.ModelAdmin):
    pass

    # def get_model_perms(self, request):
    #     return {}
