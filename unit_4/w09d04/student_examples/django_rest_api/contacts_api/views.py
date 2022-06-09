from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import ContactSerializer
from .models import Contact

# /contacts
class ContactList(generics.ListCreateAPIView):
    queryset = Contact.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = ContactSerializer # tell django what serializer to use

# /contacts/:id
class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all().order_by('id')
    serializer_class = ContactSerializer