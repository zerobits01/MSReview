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
