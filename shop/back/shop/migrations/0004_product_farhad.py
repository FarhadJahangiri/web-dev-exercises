# Generated by Django 3.2.4 on 2021-06-28 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_auto_20210628_1005'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='farhad',
            field=models.CharField(default='', max_length=50),
        ),
    ]
