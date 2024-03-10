import random
import requests
from django.contrib.auth.models import User
from forum_app.models import Post, Comment
from voting_app.models import Vote, Issue


def create_vote():
    lst_user = User.objects.all().filter(id__gt=10)
    lst_questions = Issue.objects.all()
    return [Vote(
        protocol=question.protocol,
        question=question,
        owner=usr,
        value=random.choice(question.answers.all()),
    ) for usr in lst_user for question in lst_questions]


Vote.objects.bulk_create(create_vote())


def print_data(protocol, question, owner, value):
    print(f'{protocol=}\n{question=}\n{owner=}\n{value=}\n')


list([User.objects.create_user('User' + str(i), password='1234') for i in range(1, 6)])

user = User.objects.create_user(username='User1', password='1234')
user.set_password(raw_password='1234')
user.check_password('1234')

names = ['Илья', 'Александр', 'Мария', 'Ян', 'Анна', 'Марат', 'Екатерина', 'София', 'Тимофей', 'Георгий']

def get_text_for_site():
    payload = {'type': 'paragraph'}
    req = requests.get('https://fish-text.ru/get', params=payload)
    res = req.json()
    return res.get('text')


def get_generation_comments():
    # for post in Post.objects.all():
    # for _ in range(random.randint(5, 10)):
    post = Post.objects.get(id=2)
    for _ in range(15):
        data = {
            'post': post,
            'publisher': random.choice(User.objects.all()),
            'author': random.choice(names),
            'content': get_text_for_site()}
        all_comments = post.comments.all()
        if random.random() > 0.4 and all_comments:
            data['comment'] = random.choice(all_comments)
        # print(f'{data=}')
        Comment.objects.create(**data)

