from django.db import models
from versatileimagefield.fields import VersatileImageField, PPOIField

# for using images better : https://medium.com/django-rest/django-rest-framework-uploading-images-b01fbc19a555

class Image(models.Model):
    """This class saves the images
        my purpose for this project is to save the movies and series image
    """
    name = models.CharField(max_length=255, unique=True)
    image = VersatileImageField(
        'Image',
        upload_to='images/',
        ppoi_field='image_ppoi'
    )
    image_ppoi = PPOIField()

    def __str__(self):
        return self.name



class MoviesSeries(models.Model):
    """This model/table contain all the movies
        it is only accessible for site admin 
    """

    MSTYPE = [
        ('S', 'Series'),
        ('M', 'Movies'),
    ]

    GENRE = [
        ('AC', 'Action'),
        ('HR', 'Horror'),
        ('RO', 'Rommance'),
        ('DR', 'Drama'),
        ('CO', 'Comedy'),
        ('SC', 'Science-fiction'),
        ('DO', 'Documentry'),
        ('WE', 'Western'),
        ('MU', 'Musical'),
    ]

    title = models.CharField(max_length=255, unique=True)
    desciption = models.TextField()
    created = models.DateField(auto_now_add=True)
    ms_type = models.CharField(
        max_length=1,
        choices=MSTYPE
    ) 
    genre = models.CharField(
        max_length=2,
        choices=GENRE,
    )
    image = models.ManyToManyField('movies.Image', related_name='moveis')
        
    class Meta:
        ordering = ['-created']