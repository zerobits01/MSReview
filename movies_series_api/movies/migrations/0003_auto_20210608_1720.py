# Generated by Django 3.2.3 on 2021-06-08 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('utils', '0001_initial'),
        ('movies', '0002_rename_desciption_moviesseries_description'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Image',
        ),
        migrations.AlterField(
            model_name='moviesseries',
            name='image',
            field=models.ManyToManyField(related_name='moveis', to='utils.Image'),
        ),
    ]
