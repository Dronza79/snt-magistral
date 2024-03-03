from django.contrib import admin

from .models import *


class IssueInline(admin.StackedInline):
    model = Issue
    extra = 1


@admin.register(MeetingProtocol)
class MeetingProtocolAdmin(admin.ModelAdmin):
    ordering = ['-date_event', '-time_event']
    list_display = ['title', 'date_event', 'time_event', 'count_issue']
    list_display_links = ['title']
    list_editable = ['date_event', 'time_event']
    inlines = [IssueInline]


class VoteInline(admin.StackedInline):
    model = Vote
    fk_name = 'question'
    extra = 1


@admin.register(Issue)
class IssueAdmin(admin.ModelAdmin):
    ordering = ['-meeting']
    list_display = ['title', 'meeting', 'count_vote', 'count_vote_true', 'count_vote_false']
    list_display_links = ['title']
    inlines = [VoteInline]


@admin.register(Vote)
class VoteAdmin(admin.ModelAdmin):
    def get_model_perms(self, request):
        return {}