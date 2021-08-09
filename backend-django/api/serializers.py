from rest_framework import serializers
from .models import PersonalInfo


class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = ['id', 'first_name', 'last_name', 'phone', 'email', 'image']
