from rest_framework import serializers 
from .models import Company 

class CompanySerializer(serializers.ModelSerializer): # serializers.ModelSerializer just tells django to convert sql to JSON
    class Meta:
        model = Company # tell django which model to use
        fields = ('id', 'name', 'industry',) # tell django which fields to include