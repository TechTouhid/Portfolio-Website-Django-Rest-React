# Generated by Django 3.2.5 on 2021-08-10 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_portfolio_portfolio_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolio',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
