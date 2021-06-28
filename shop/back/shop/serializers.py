# from shop.models import Product
# from rest_framework.serializers import HyperlinkedModelSerializer


# class ProductSerializer(HyperlinkedModelSerializer):

#     class Meta:
#         model = Product
#         fields = ['id', 'title']
#         read_only_fields = ['id']

from shop.models import Product
from rest_framework.serializers import HyperlinkedModelSerializer

class ProductSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'title','category','description','price','image']
        read_only_fields = ['id']

