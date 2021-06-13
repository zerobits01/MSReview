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
from utils import serializers as u_ser
from . import models
from users import permissions
import json

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
        return Response({'ping_response': an_apiview})

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

    def create(self, request, *args, **kwargs):
        image_name = None
        image = None
        data = {}
        created_image = None
        created_profile = None

        # create the user
        json_data = json.loads(request.data["data"])
        profile_validated = serializers.MSUserProfileSerializer(data=json_data)

        if profile_validated.is_valid():
            created_profile = profile_validated.save()
        else:
            return Response(profile_validated.errors)

        # add image if exists
        if "name" in request.data:
            image_validated = u_ser.ImageSerializer(data=request.data)
            if image_validated.is_valid():
                created_image = image_validated.save()
                created_profile.image = created_image
                created_profile.save()
                print(20*"#")
            else:
                print(image_validated.errors)
                
        created_profile = created_profile.__dict__
        created_profile.pop('_state')
        created_profile.pop('password')
        data['profile'] = str(created_profile)
        if created_image:
            created_image = created_image.__dict__
            created_image.pop('_state')
            data['image'] = str(created_image)

        return Response(data)



class TestimonialViewSet(viewsets.ModelViewSet):
    """Handle creating and updating Testimonial"""

    # just defining classes
    serializer_class = serializers.TestimonialSerializer
    queryset = models.Testimonial.objects.all()

    http_method_names = ['get', 'post']


class SiteCommentsViewSet(viewsets.ModelViewSet):
    """Handle creating and updating Testimonial"""

    # just defining classes
    serializer_class = serializers.SiteCommentsSerializer
    queryset = models.SiteComments.objects.all()

    http_method_names = ['post']
