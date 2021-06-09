from rest_framework import viewsets
from .serializers import ImageSerializer
from rest_framework.response import Response
from .models import Image
from .utils import send_mail
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer


class ImageViewSet(viewsets.ModelViewSet):

    serializer_class = ImageSerializer
    queryset = Image.objects.all()


# sending post request with image key and name key

@api_view(('GET',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def send_email(request, *args, **kwargs):
    send_mail(subject="test django", from_email="pgr0101mm@gmail.com", to="zerobits0101@gmail.com")
    return Response({})