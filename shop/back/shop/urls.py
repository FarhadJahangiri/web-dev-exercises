# from shop.views import ProductViewSet
# from rest_framework import routers

# router = routers.DefaultRouter()
# router.register('products',ProductViewSet)
# urlpatterns = router.urls

from shop.views import ProductViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('products', ProductViewSet)
urlpatterns = router.urls