from rest_framework import serializers
from rest_framework.exceptions import ParseError

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


class QuestionSerializer(serializers.Serializer):
    question = serializers.IntegerField()
    value = serializers.IntegerField()


class VoteSerializer(serializers.Serializer):
    protocol = serializers.IntegerField()
    questions = QuestionSerializer(many=True)

    def create(self, validated_data):
        print(f'{validated_data=}')
        protocol = (MeetingProtocol.objects
                    .prefetch_related('questions', 'questions__answers')
                    .get(id=validated_data.get('protocol')))
        questions = validated_data.get('questions')
        if protocol.questions.count() != len(questions):
            raise ParseError('Количество ответов не соответствует количеству вопросов')
        Vote.objects.bulk_create([
            Vote(
                protocol=protocol,
                question=Issue.objects.get(id=answer.get('question')),
                owner=self.context.get("request").user,
                value=Answer.objects.get(id=answer.get('value')))
            for answer in questions])
        return {'protocol': protocol.id, 'questions': questions}
