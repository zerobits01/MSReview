from django.urls import path, include
from rest_framework.routers import DefaultRouter
from critics import views

router = DefaultRouter()

router.register('critic', views.CriticViewSet, basename='critic')
router.register('comment', views.CommentViewSet, basename='comment')


urlpatterns = [
    path('comment/critic/<int:critic>', views.filter_comments_critic_base),
    path('', include(router.urls))
]