from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from .serializers import PersonalInfoSerializer, PortfolioSerializer

from .models import PersonalInfo, Portfolio


class PersonalInfoView(generics.ListAPIView):
    serializer_class = PersonalInfoSerializer

    def get_queryset(self):
        return PersonalInfo.objects.filter(first_name="Touhidur")


class PortfolioView(generics.ListAPIView):
    serializer_class = PortfolioSerializer

    def get_queryset(self):
        return Portfolio.objects.all()
