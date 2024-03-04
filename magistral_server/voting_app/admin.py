from django.contrib import admin

from .models import *


class IssueInline(admin.StackedInline):
    model = Issue
    extra = 0
    filter_horizontal = "answers",


@admin.register(MeetingProtocol)
class MeetingProtocolAdmin(admin.ModelAdmin):
    ordering = ['-status', 'date_event', 'time_event']
    readonly_fields = ['title']
    list_display = ['title', 'count_issue', 'count_vote', 'status', 'date_event', 'time_event', 'close_through']
    list_display_links = ['title']
    list_editable = ['date_event', 'time_event', 'close_through', 'status']
    fields = ('title', ('date_event', 'time_event'), 'close_through', 'agenda', 'status')
    inlines = [IssueInline]


@admin.register(Issue)
class IssueAdmin(admin.ModelAdmin):
    list_display = ['protocol', 'title', 'show_answer_options', 'voting_results', ]
    list_display_links = ['protocol', 'title']
    filter_horizontal = "answers",


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    def get_model_perms(self, request):
        return {}


@admin.register(Vote)
class VoteAdmin(admin.ModelAdmin):
    ordering = ('owner', 'protocol', 'question', )
    list_display = ['value', 'protocol', 'question', 'owner', 'create_at' ]
    list_display_links = ['value']

    # def get_model_perms(self, request):
    #     return {}
