from django.contrib import admin
from .models import PersonalInfo


# Register your models here.
class PersonalInfoAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone')


admin.site.register(PersonalInfo, PersonalInfoAdmin)
