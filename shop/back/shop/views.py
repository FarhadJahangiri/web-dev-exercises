# from shop.models import Product
# from .serializers import ProductSerializer
# from rest_framework import views

# class ProductViewSet(views.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

from shop.models import Product
from shop.serializers import ProductSerializer
from rest_framework.viewsets import ModelViewSet


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer