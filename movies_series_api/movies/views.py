from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from movies import models
from movies import serializers
from django.db.models import Avg
# Create your views here.


class RetrieveMovies(viewsets.ModelViewSet):

    queryset = models.MoviesSeries.objects.all()
    serializer_class = serializers.MoviesSeries
    http_method_names = ['get']

    def list(self, request):
        data = []

        movies = self.queryset.filter().order_by("-id")[:10]
        for movie in movies:
            data.append({
                "id": movie.id,
                "title": movie.title,
                "description": movie.description,
                "imagesrc": str(movie.image.all()[0].image),
                "alt": "movie item"
            })

        return Response(data)

    def retrieve(self, request, pk=None):
        # we can use the pk to get something from model
        movie = self.queryset.get(pk=pk)
        critics = []
        # retrieving data from critic needs the _state so before deleting the data we have to retrieve what we want
        avg_rate = movie.critic_set.all().aggregate(Avg('rate'))
        print(20*"#", '\n', avg_rate)
        critics_temp = movie.critic_set.all()
        for critic in critics_temp:
            critics.append(
                {
                    "id": critic.id,
                    "title": movie.title,
                    "description": critic.text,
                    "imagesrc": str(movie.image.all()[0].image),
                    "alt": "critic item"
                }
            )
        image = movie.image.filter().first()
        image = image.__dict__
        image.pop('_state')
        movie_dict = movie.__dict__
        movie_dict.pop('_state')
        movie_dict['image'] = image
        movie_dict['avgrate'] = avg_rate
        return Response({'movie': movie_dict, 'critics': critics})
