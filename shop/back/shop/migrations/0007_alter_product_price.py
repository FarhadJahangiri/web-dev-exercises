# Generated by Django 3.2.4 on 2021-06-28 08:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_auto_20210628_1028'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, default='0.0', max_digits=5),
        ),
    ]
