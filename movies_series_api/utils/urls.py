from django.urls import path, include
from rest_framework.routers import DefaultRouter
from utils import views

router = DefaultRouter()

router.register('image', views.ImageViewSet, basename='image')


urlpatterns = [

    path('', include(router.urls))
]
