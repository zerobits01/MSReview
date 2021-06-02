from django.urls import path, include
from rest_framework.routers import DefaultRouter
from movies import views

router = DefaultRouter()

router.register('retrieve', views.RetrieveMovies, basename='retrieve')


urlpatterns = [

    path('', include(router.urls))
]
