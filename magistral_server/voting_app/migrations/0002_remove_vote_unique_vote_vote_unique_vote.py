# Generated by Django 4.1.3 on 2024-03-09 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voting_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='vote',
            name='unique_vote',
        ),
        migrations.AddConstraint(
            model_name='vote',
            constraint=models.UniqueConstraint(fields=('protocol', 'question', 'owner'), name='unique_vote', violation_error_message='Нельзя проголосовать по одному и тому же вопросу дважды'),
        ),
    ]
