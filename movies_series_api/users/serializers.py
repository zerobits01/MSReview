from rest_framework import serializers
from users import models


class PingSerializer(serializers.Serializer):
    """
        This is a serializer test for ping class 
    """
    
    test = serializers.CharField(max_length=20)

class MSUserProfileSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = models.MSUserProfile
        fields = ('id', 'email', 'name', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {'input_type': 'password'}
            }
        }
        
        # this is how we can return all related instead rewriting the methods
        expandable_fields = {
            'image': ('utils.ImageSerializer'),
        }

    def create(self, validated_data):
        """Create and return a new user"""
        user = models.MSUserProfile.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'],
            password=validated_data['password']
        )

        return user

    def update(self, instance, validated_data):
        """Handle updating user account"""
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)

        return super().update(instance, validated_data)


class TestimonialSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = models.Testimonial
        fields = ('id', 'email', 'name', 'comment')
        read_only_fields = ["id"]

    def create(self, validated_data):
        """Create and return a new user"""
        testimonial = models.Testimonial.objects.create(
            email=validated_data['email'],
            name=validated_data['name'],
            comment=validated_data['comment']
        )

        return testimonial

class SiteCommentsSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = models.SiteComments
        fields = ('id', 'email', 'name', 'comment')
        read_only_fields = ["id"]

    def create(self, validated_data):
        """Create and return a new user"""
        scomment = models.SiteComments.objects.create(
            email=validated_data['email'],
            name=validated_data['name'],
            comment=validated_data['comment']
        )

        return scomment