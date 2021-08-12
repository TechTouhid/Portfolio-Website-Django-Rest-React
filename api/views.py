import os

from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render, get_object_or_404
from django.views import View
from rest_framework import generics
from .serializers import PersonalInfoSerializer, PortfolioSerializer, WorkSerializer

from .models import PersonalInfo, Portfolio, Work


class PersonalInfoView(generics.ListAPIView):
    serializer_class = PersonalInfoSerializer

    def get_queryset(self):
        return PersonalInfo.objects.filter(first_name="Touhidur")


class PortfolioView(generics.ListAPIView):
    serializer_class = PortfolioSerializer

    def get_queryset(self):
        return Portfolio.objects.all()
    
class WorkView(generics.ListAPIView):
    serializer_class = WorkSerializer

    def get_queryset(self):
        return Work.objects.all()


# Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
