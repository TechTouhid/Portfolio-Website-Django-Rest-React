from django.contrib import admin
from .models import PersonalInfo, Portfolio, ProtfolioType


# Register your models here.
class PersonalInfoAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone')


class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('title', 'portfolio_type')

    list_filter = ('portfolio_type','title')


admin.site.register(PersonalInfo, PersonalInfoAdmin)
admin.site.register(Portfolio, PortfolioAdmin)
admin.site.register(ProtfolioType)
