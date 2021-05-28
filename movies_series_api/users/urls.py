from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users import views


router = DefaultRouter()
# first arg is url, basename is for retrieving

router.register('ping-viewset', views.PingViewSet, basename='ping-viewset')
router.register('profile', views.UserProfileViewSet)

urlpatterns = [
    path('ping/', views.Ping.as_view()), # ping class is an inherited class from APIView
    path('', include(router.urls)),
    path('login', views.UserLoginApiView.as_view())
]