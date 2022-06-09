from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import CompanySerializer
from .models import Company

class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = CompanySerializer # tell django what serializer to use

class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all().order_by('id')
    serializer_class = CompanySerializer
