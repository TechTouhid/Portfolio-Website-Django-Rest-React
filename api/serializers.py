from rest_framework import serializers
from .models import PersonalInfo, Portfolio


class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = ['id', 'first_name', 'last_name', 'phone', 'email', 'image']


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = ['id', 'title', 'image', 'img_caption', 'portfolio_type', 'url']

