# Generated by Django 3.2.5 on 2021-08-12 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_portfolio_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='personalinfo',
            name='resume',
            field=models.ImageField(blank=True, null=True, upload_to='files/%y'),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]