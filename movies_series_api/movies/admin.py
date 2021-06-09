from django.contrib import admin
from movies.models import MoviesSeries
from utils.models import Image
# Register your models here.

admin.site.register(Image)
admin.site.register(MoviesSeries)
