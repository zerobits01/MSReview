from django.db import models
from versatileimagefield.fields import VersatileImageField, PPOIField
# Create your models here.

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

