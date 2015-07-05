from django.db import models

# Create your models here.
class User(models.Model):
    _id = models.AutoField(primary_key=True)
    uuid = models.UUIDField()
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=80)
    email = models.EmailField()
    image = models.ImageField()

    #user level decision permission
    level = models.IntegerField()  

    def __str__(self):  
        return self.username
