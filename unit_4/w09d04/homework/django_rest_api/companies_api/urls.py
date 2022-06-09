from django.urls import path
from . import views

urlpatterns = [
    path('api/companies', views.CompanyList.as_view(), name='company_list'),
    path('api/companies/<int:pk>', views.CompanyDetail.as_view(), name='company_detail'), 
]