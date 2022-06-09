from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import LocationSerializer
from .models import Location

class LocationList(generics.ListCreateAPIView):
    queryset = Location.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = LocationSerializer # tell django what serializer to use

class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all().order_by('id')
    serializer_class = LocationSerializer