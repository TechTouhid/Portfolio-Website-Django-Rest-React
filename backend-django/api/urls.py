
from django.urls import path
from . import views
urlpatterns = [
    path('personalinfo', views.PersonalInfoView.as_view()),
]
