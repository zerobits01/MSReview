from rest_framework import serializers
from movies import models


class MoviesSeries(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = models.MoviesSeries
        fields = ('id', 'title', 'description', 'created', 'ms_type', 'genre', 'image')

