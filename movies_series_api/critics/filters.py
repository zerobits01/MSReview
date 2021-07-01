from django_filters import rest_framework as filters
from .models import Comment

class CommentFilter(filters.FilterSet):
    # critic = filters.NumberFilter(field_name='critic', method='filter_exact_critic')
    #                                 # field name is important, using method instead lookup_expression is so important

    # def filter_exact_critic(self, queryset, name, value):
    #     if value:
    #         queryset = queryset.filter(critic=value).values("user__name", "user__image", "text", "rate")
    #         return queryset
    #     else:
    #         return queryset.filter(critic=value)


    class Meta:
        model = Comment
        fields = ['critic']

