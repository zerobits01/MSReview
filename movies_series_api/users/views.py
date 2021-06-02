########################################### IMPORTS ###########################################

from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from users import serializers
from . import models
from users import permissions

###########################################  VIEWS ############################################

class Ping(APIView):

    """This is a Ping class for checking if the rest framework works or not"""
    
    # we use api view when we need full controll


    # this is the serilizer class for validating data
    serializer_class = serializers.PingSerializer


    # https methods that we gonna handle

    def get(self, request, format=None):
        """returns a simple dictionary for test"""
        an_apiview = [
            'pong',
            'availabke methods get, post, patch, put, delete'
        ]
        return Response({'ping_response' : an_apiview})

    
    def post(self, request, format=None):
        """for data creation"""
        serializer = self.serializer_class(data=request.data)
        
        if serilizer.is_valid():
            test = serializer.validated_data.get('test')
            message = f'got data, {test}'
            return Response({'message': message})
        else:
            return Response(
                serilizer.errors, 
                status=status.HTTP_400_BAD_REQUEST
            )
    
    def put(self, request, pk=None):
        """used for updating all the object"""
        serializer = self.serializer_class(data=request.data)
        
        if serilizer.is_valid():
            test = serializer.validated_data.get('test')
            message = f'got data, {test}'
            return Response({'message': message})
        else:
            return Response(
                serilizer.errors, 
                status=status.HTTP_400_BAD_REQUEST
            )


    def patch(self, request, pk=None):
        """updaing only a part of the object"""
        serializer = self.serializer_class(data=request.data)
        
        if serilizer.is_valid():
            test = serializer.validated_data.get('test')
            message = f'got data, {test}'
            return Response({'message': message})
        else:
            return Response(
                serilizer.errors, 
                status=status.HTTP_400_BAD_REQUEST
            )


    def delete(self, request, pk=None):

        """updaing only a part of the object"""
        return Response({'message': f"test for delete the {pk}"})


class PingViewSet(viewsets.ViewSet):
    """doc string"""
    
    serializer_class = serializers.PingSerializer
    
    def list(self, request):
        """doc string"""
        # http get to the base point or root of the endpoint linked to viewset
        
        return Response({'message': "This will be a set of objects"})

    def create(self, request):
        
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            return Response()
    
    def retrieve(self, request, pk=None):
        # we can use the pk to get something from model
        return Response({'message': f"pk is {pk}"})

    def update(self, request, pk=None):
        return Response({'message': f"pk is {pk}"})
        
    def partial_update(self, request, pk=None):
        # if we wanna update or change these functions we overwrite them else we dont write them
        return Response({'message': f"pk is {pk}"})
        
    def destroy(self, request, pk=None):
        return Response({'message': f"pk is {pk}"})


class UserLoginApiView(ObtainAuthToken):
    """this class is for loging"""
    
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class UserProfileViewSet(viewsets.ModelViewSet):
    """Handle creating and updating profiles"""
    
    # just defining classes
    serializer_class = serializers.MSUserProfileSerializer
    queryset = models.MSUserProfile.objects.all()
    
    # first check authentication
    authentication_classes = (TokenAuthentication,)
    # then check authorization
    permission_classes = (permissions.UpdateOwnProfile,)

    filter_backends = (filters.SearchFilter,)
    # it can search based on these fields
    search_fields = ('name', 'email',)
