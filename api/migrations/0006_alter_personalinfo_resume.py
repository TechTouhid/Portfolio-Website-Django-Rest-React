# Generated by Django 3.2.5 on 2021-08-12 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210812_1513'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personalinfo',
            name='resume',
            field=models.FileField(blank=True, null=True, upload_to='files/%y'),
        ),
    ]