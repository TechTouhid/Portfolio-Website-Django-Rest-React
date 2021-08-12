from rest_framework import serializers
from .models import PersonalInfo, Portfolio, Work


class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = ['id', 'first_name', 'last_name', 'phone', 'email', 'image', 'resume']


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = ['id', 'title', 'image', 'img_caption', 'portfolio_type', 'url']

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ['id', 'title', 'description', 'image_banner', 'image_icon', 'url']

