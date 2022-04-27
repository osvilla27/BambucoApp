from django.urls import path
from api import views


urlpatterns = [
    path('student/', views.StudentView.as_view()),
]