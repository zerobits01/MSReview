# Generated by Django 3.2.3 on 2021-06-08 17:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('utils', '0001_initial'),
        ('users', '0007_auto_20210607_1529'),
    ]

    operations = [
        migrations.AddField(
            model_name='msuserprofile',
            name='image',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='utils.image'),
        ),
    ]