from django_filters import rest_framework as filters
from .models import MSUserProfile

class UserFilter(filters.FilterSet):
    email = filters.CharFilter(field_name='email', method='filter_email_base')

    def filter_email_base(self, queryset, name, value):
        queryset = queryset.get(email=value)
        data = {}
        data["critics"] = []

        for critic in queryset.critic_set.all():
            c = critic.__dict__
            c.pop("_state")
            data["critics"].append(c)
        
        user = queryset.__dict__
        user.pop("_state")
        data["user"] = user
        
        return data
        

