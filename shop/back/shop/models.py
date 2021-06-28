from django.db.models import Model, CharField, DecimalField, TextField
from django.db.models.fields import URLField


class Product(Model):
    title = CharField(max_length=100, default="")
    category = CharField(max_length=50, default="")
    description = TextField(default="")
    price = DecimalField(max_digits=5, decimal_places=2, default="0.0")
    image = URLField(max_length=300, default='')