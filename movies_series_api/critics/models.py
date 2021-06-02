from django.db import models

# Create your models here.

class RateChioices(models.IntegerChoices):
    VB = 1
    B = 2
    M = 3
    G = 4
    VG = 5


class Comment(models.Model):
    """This model saves the info about comments for each Review or critic
        this will save the user created the comment and also the rate and comment text
    
    """

    user = models.ForeignKey(
        'users.MSUserProfile',
        on_delete=models.CASCADE
    )
    critic = models.ForeignKey(
        'critics.Critic',
        on_delete=models.CASCADE
    )
    text = models.TextField()
    rate = models.IntegerField(choices=RateChioices.choices, blank=False, null=False)


class Critic(models.Model):
    """This model saves reviews about each movie
    """

    user = models.ForeignKey(
        'users.MSUserProfile',
        on_delete=models.CASCADE
    ) 
    movie = models.ForeignKey(
        'movies.MoviesSeries',
        on_delete=models.CASCADE
    )
    text = models.TextField(blank=False, null=False)
    rate = models.IntegerField(choices=RateChioices.choices, blank=False, null=False)