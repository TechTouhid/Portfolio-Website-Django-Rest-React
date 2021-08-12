
from django.urls import path
from . import views
urlpatterns = [
    path('personalinfo', views.PersonalInfoView.as_view()),
    path('portfolio/list', views.PortfolioView.as_view()),
    path('work/list', views.WorkView.as_view()),
]
