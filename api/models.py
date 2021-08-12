from django.db import models
from django.utils.html import mark_safe


class PersonalInfo(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    image = models.ImageField(null=True, blank=True)
    resume = models.FileField(upload_to="files/%y", null=True, blank=True)

    def fullname(self):
        return f"{self.first_name} {self.last_name}"

    def __str__(self):
        return self.fullname()


class ProtfolioType(models.Model):
    type = models.CharField(max_length=100)

    def __str__(self):
        return self.type


class Portfolio(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(null=True, blank=True)
    img_caption = models.CharField(max_length=100)
    portfolio_type = models.ForeignKey(ProtfolioType, on_delete=models.CASCADE)
    url = models.URLField()

    def __str__(self):
        return f"{self.title}"
    
class Work(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    image_banner = models.ImageField(null=True, blank=True)
    image_icon = models.ImageField(null=True, blank=True)
    url = models.URLField(null=True, blank=True)
    
    def __str__(self):
        return self.title
    
