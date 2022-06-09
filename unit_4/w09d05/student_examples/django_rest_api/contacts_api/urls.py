from django.urls import path
from . import views

urlpatterns = [
    path('api/contacts', views.ContactList.as_view(), name='contact_list'),
    path('api/contacts/<int:pk>', views.ContactDetail.as_view(), name='contact_detail'),
]
