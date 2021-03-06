# Generated by Django 3.2.3 on 2021-06-07 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_testimonial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SiteComments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('name', models.CharField(max_length=255)),
                ('comment', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='testimonial',
            name='email',
            field=models.EmailField(max_length=255),
        ),
    ]
