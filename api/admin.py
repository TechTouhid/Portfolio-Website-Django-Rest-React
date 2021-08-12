from django.contrib import admin
from .models import PersonalInfo, Portfolio, ProtfolioType, Work


# Register your models here.
class PersonalInfoAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone', 'resume')


class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('title', 'portfolio_type')

    list_filter = ('portfolio_type','title')
    
class WorkAdmin(admin.ModelAdmin):
    list_display =('title', )


admin.site.register(PersonalInfo, PersonalInfoAdmin)
admin.site.register(Portfolio, PortfolioAdmin)
admin.site.register(ProtfolioType)
admin.site.register(Work, WorkAdmin)
