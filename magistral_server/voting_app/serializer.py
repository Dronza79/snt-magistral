from rest_framework import serializers

from .models import MeetingProtocol, Issue, Answer, Vote


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'name']


class IssueSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)

    class Meta:
        model = Issue
        fields = ['id', 'title', 'description', 'answers']


class MeetingProtocolSerializer(serializers.ModelSerializer):
    questions = IssueSerializer(many=True)

    class Meta:
        model = MeetingProtocol
        fields = ['id', 'title', 'number', 'start_event', 'close_event', 'agenda', 'status', 'questions']


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ['protocol', 'question', 'owner', 'value']
