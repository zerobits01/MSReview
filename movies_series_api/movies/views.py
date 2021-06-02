from django.shortcuts import render
from rest_framework import viewsets
from movies import models
from movies import serializers
# Create your views here.


class RetrieveMovies(viewsets.ModelViewSet):

    queryset = models.MoviesSeries.objects.all()
    serializer_class = serializers.MoviesSeries
    http_method_names = ['get']
