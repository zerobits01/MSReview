from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users import views


user_router = DefaultRouter()
# first arg is url, basename is for retrieving

user_router.register('ping-viewset', views.PingViewSet, basename='ping-viewset')
user_router.register('profile', views.UserProfileViewSet)


guest_router = DefaultRouter()

guest_router.register('testimonial', views.TestimonialViewSet)
guest_router.register('contactus', views.SiteCommentsViewSet)

urlpatterns = [
    path('', include(guest_router.urls)),
    path('ping', views.Ping.as_view()), # ping class is an inherited class from APIView
    path('login', views.UserLoginApiView.as_view()),
    path('user/', include(user_router.urls))
]