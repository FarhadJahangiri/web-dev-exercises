from django.urls import path
from .views import view_article

urlpatterns = [
    # path('articles/<int:id>/', view_article),
    path('', view_article)
]