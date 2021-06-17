from django.contrib import admin

from users import models

admin.site.register(models.MSUserProfile)
admin.site.register(models.Testimonial)
admin.site.register(models.SiteComments)