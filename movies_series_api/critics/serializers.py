from rest_framework import serializers
from critics import models

class CriticSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = models.Critic
        fields = ('id', 'user', 'movie', 'text', 'rate')
        read_only_fields = ['id', 'user']
    def create(self, validated_data):
        """Create and return a new user"""
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
        print(user)
        critic = models.Critic.objects.create(
            user=user,
            movie=validated_data['movie'],
            text=validated_data['text'],
            rate=validated_data['rate']
        )

        return critic


class CommentSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""

    class Meta:
        model = models.Comment
        fields = ('id', 'user', 'critic', 'text', 'rate')
        read_only_fields = ['id', 'user']

    def create(self, validated_data):
        """Create and return a new user"""
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
        comment = models.Comment.objects.create(
            user=user,
            critic=validated_data["critic"],
            text=validated_data['text'],
            rate=validated_data['rate']
        )

        return comment
