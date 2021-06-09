from rest_framework import viewsets
from .serializers import ImageSerializer
from .models import Image

class ImageViewSet(viewsets.ModelViewSet):

    serializer_class = ImageSerializer
    queryset = Image.objects.all()


# sending post request with image key and name key

