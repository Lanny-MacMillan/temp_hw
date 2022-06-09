from os import stat_result
from django.db import models

# Create your models here.
class Location(models.Model):
    street = models.CharField(max_length=32)
    city = models.CharField(max_length=32)
    state = models.CharField(max_length=32)