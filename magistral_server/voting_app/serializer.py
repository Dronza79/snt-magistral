from django.db import IntegrityError
from rest_framework import serializers
from rest_framework.exceptions import NotAcceptable

from .models import MeetingProtocol, Issue, Answer, Vote


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'name']


class CountVotersFild(serializers.Field):
    def to_representation(self, instance):
        return instance.get_count_voters()


class CountIssueFild(serializers.Field):
    def to_representation(self, instance):
        return instance.display_count_questions()


class VotingResultFild(serializers.Field):
    def to_representation(self, instance: Issue) -> dict:
        return {a.name: instance.count_part_votes(a.name) for a in instance.answers.all()}


class IssueSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)
    voting_result = VotingResultFild(source='*')

    class Meta:
        model = Issue
        fields = ['id', 'title', 'description', 'answers', 'voting_result']


class ListSerializer(serializers.ModelSerializer):
    count_voters = CountVotersFild(source='*')
    count_questions = CountIssueFild(source='*')

    class Meta:
        model = MeetingProtocol
        fields = [
            'id', 'title', 'number', 'start_event',
            'close_event', 'status', 'count_questions',
            'count_voters']


class DetailSerializer(serializers.ModelSerializer):
    count_voters = CountVotersFild(source='*')
    questions = IssueSerializer(many=True)

    class Meta:
        model = MeetingProtocol
        fields = [
            'id', 'title', 'number', 'start_event',
            'close_event', 'agenda', 'status', 'count_voters',
            'questions']


class QuestionSerializer(serializers.Serializer):
    question = serializers.IntegerField()
    value = serializers.IntegerField()


class VoteSerializer(serializers.Serializer):
    protocol = serializers.IntegerField()
    questions = QuestionSerializer(many=True)

    def create(self, validated_data):
        # print(f'{validated_data=}')
        protocol = (MeetingProtocol.objects
                    .prefetch_related('questions', 'questions__answers')
                    .get(id=validated_data.get('protocol')))
        questions = validated_data.get('questions')
        if protocol.questions.count() != len(questions):
            raise NotAcceptable('Количество ответов не соответствует количеству вопросов')
        try:
            Vote.objects.bulk_create([
                Vote(
                    protocol=protocol,
                    question=Issue.objects.get(id=answer.get('question')),
                    owner=self.context.get("request").user,
                    value=Answer.objects.get(id=answer.get('value')))
                for answer in questions])
        except IntegrityError:
            raise NotAcceptable('Нельзя проголосовать по одному и тому же вопросу дважды')
        else:
            return {'protocol': protocol.id, 'questions': questions}
