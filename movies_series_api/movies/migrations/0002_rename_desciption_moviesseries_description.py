# Generated by Django 3.2.3 on 2021-06-02 18:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='moviesseries',
            old_name='desciption',
            new_name='description',
        ),
    ]
