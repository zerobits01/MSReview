from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from critics import models
from critics import serializers
from .filters import CommentFilter

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
# {
#     id: id
#     title: props.data.movie_title,
#     description: item.text,
#     imagesrc: item.image,
#     rate: item.rate,
#     alt: "ciritic image"

# }

    def list(self, request):
        data = []

        critics = self.queryset.filter().order_by("-id")[:10]
        for critic in critics:
            movie = critic.movie
            image = movie.image.all()
            data.append({
                "id": critic.id,
                "user_name": critic.user.name,
                "title": movie.title,
                "description": critic.text,
                "imagesrc": str(image[0].image),
                "rate": critic.rate,
                "alt": "critic item from"
            })

        return Response(data)

    def retrieve(self, request, pk=None):
        # we can use the pk to get something from model
        critic = self.queryset.get(pk=pk)
        user = {'id': critic.user.id, 'name': critic.user.name, "email": critic.user.email, "profile": str(critic.user.image.image)}
        image = str(critic.movie.image.all()[0].image)
        movie = critic.movie.__dict__

        # retrieving data from critic needs the _state so before deleting the data we have to retrieve what we want
        comments = list(critic.comment_set.all().values('id', 'user__id', 'user__name', 'text', 'rate'))
        critic_dict = critic.__dict__
        critic_dict.pop('_state')
        movie.pop('_state')
        movie["imagesrc"] = image
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

    filterset_class = CommentFilter

    http_method_names = ['get', 'post']

    def get_serializer_context(self):
        context = super(CommentViewSet, self).get_serializer_context()
        context.update({"request": self.request})
        return context