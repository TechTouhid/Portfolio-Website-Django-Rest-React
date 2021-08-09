from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics
from .serializers import PersonalInfoSerializer

from .models import PersonalInfo


class PersonalInfoView(generics.ListAPIView):
    serializer_class = PersonalInfoSerializer

    def get_queryset(self):
        return PersonalInfo.objects.all()
