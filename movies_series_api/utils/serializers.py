from .models import Image
from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer
from versatileimagefield.serializers import VersatileImageFieldSerializer

class ImageSerializer(FlexFieldsModelSerializer):
    image = VersatileImageFieldSerializer(
        sizes='product_headshot'
    )
    class Meta:
        model = Image
        fields = ['pk', 'name', 'image']