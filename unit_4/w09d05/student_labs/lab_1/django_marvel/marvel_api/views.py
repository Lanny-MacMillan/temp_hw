from django.shortcuts import render
from rest_framework import generics
from .serializers import CharacterSerializer
from .models import Character

class CharacterList(generics.ListCreateAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

class CharacterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
# Create your views here.
