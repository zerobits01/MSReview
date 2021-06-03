from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from movies import models
from movies import serializers
# Create your views here.


class RetrieveMovies(viewsets.ModelViewSet):

    queryset = models.MoviesSeries.objects.all()
    serializer_class = serializers.MoviesSeries
    http_method_names = ['get']

    def retrieve(self, request, pk=None):
        # we can use the pk to get something from model
        movie = self.queryset.get(pk=pk)
        
        # retrieving data from critic needs the _state so before deleting the data we have to retrieve what we want
        critics = list(movie.critic_set.all().values('id', 'user__id', 'user__name', 'text', 'rate'))
        movie_dict = movie.__dict__
        movie_dict.pop('_state')
        return Response({'movie': movie_dict, 'critics': critics})
