import random
from django.contrib.auth.models import User
from voting_app.models import Vote, Issue

def create_vote():
    lst_user = User.objects.all().filter(id__gt=10)
    lst_questions = Issue.objects.all()
    return [Vote(
        protocol=question.protocol,
        question=question,
        owner=user,
        value=random.choice(question.answers.all()),
    ) for user in lst_user for question in lst_questions]

Vote.objects.bulk_create(create_vote())


def print_data(protocol, question, owner, value):
    print(f'{protocol=}\n{question=}\n{owner=}\n{value=}\n')


list([User.objects.create_user('User' + str(i), password='1234') for i in range(5)])

user = User.objects.create_user(username='User1', password='1234')
user.set_password(raw_password='1234')
user.check_password('1234')