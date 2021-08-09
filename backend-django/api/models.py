from django.db import models
from django.utils.html import mark_safe


class PersonalInfo(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    image = models.ImageField(upload_to="img/%y")

    def fullname(self):
        return f"{self.first_name} {self.last_name}"

    def __str__(self):
        return self.fullname()


    # def image_tag(self):
    #     return mark_safe('<img src="/directory/%s" width="150" height="150" />' % (self.image))
    #
    # image_tag.short_description = 'Image'