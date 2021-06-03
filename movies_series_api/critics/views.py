from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from critics import models
from critics import serializers

# Create your views here.

class CriticViewSet(viewsets.ModelViewSet):
    """Handling all critics creation and retrieving
        patch update and delete are not supported
    """
    
    # just defining classes
    serializer_class = serializers.CriticSerializer
    queryset = models.Critic.objects.all()
    
    # first check authentication
    authentication_classes = (TokenAuthentication,)

    filter_backends = (filters.SearchFilter,)

    http_method_names = ['get', 'post']


    def get_serializer_context(self):
        context = super(CriticViewSet, self).get_serializer_context()
        context.update({"request": self.request})
        return context


    def retrieve(self, request, pk=None):
        # we can use the pk to get something from model
        critic = self.queryset.get(pk=pk)
        user = {'id': critic.user.id, 'name': critic.user.name}
        movie = critic.movie.__dict__

        # retrieving data from critic needs the _state so before deleting the data we have to retrieve what we want
        comments = list(critic.comment_set.all().values('id', 'user__id', 'user__name', 'text', 'rate'))
        critic_dict = critic.__dict__
        critic_dict.pop('_state')
        movie.pop('_state')

        return Response({'critic': critic_dict, 'user': user, 'movie': movie, 'comments': comments})


class CommentViewSet(viewsets.ModelViewSet):
    """Handling all comments creation and retrieving
        patch update and delete are not supported
    """
    
    # just defining classes
    serializer_class = serializers.CommentSerializer
    queryset = models.Comment.objects.all()
    
    # first check authentication
    authentication_classes = (TokenAuthentication,)

    http_method_names = ['get', 'post']

    def get_serializer_context(self):
        context = super(CommentViewSet, self).get_serializer_context()
        context.update({"request": self.request})
        return context