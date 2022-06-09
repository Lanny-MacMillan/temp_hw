from django.db import models

# Create your models here.
class Character(models.Model):
    name = models.CharField(max_length=32)
    age = models.IntegerField()
    main_power = models.CharField(max_length=32)
    team = models.CharField(max_length=32)
