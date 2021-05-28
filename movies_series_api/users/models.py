from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
# Create your models here.


class MSUserManager(BaseUserManager):
    """This is the Movies Series Review User Manager
        This only handles User creation
    """
    def create_user(self, email, name, password=None):
        """create user based on info that we want
        """
        if not email:
            raise ValueError("email should not be empty")
        
        email = self.normalize_email(email)
        
        user = self.model(email=email, name=name)
        
        user.set_password(password) # this will handle hashing
        user.save() # this will save the user in the django user management db
            # using _db can cause some problems
        return user # returns the user for next changes

    
    def create_superuser(self, email, name, password):
        """Handles super user creation based on the create user method
        """
        user = self.create_user(email, name, password)
        user.is_superuser = True
        user.is_staff = True
        
        user.save()
        
        return user

class MSUserProfile(AbstractBaseUser, PermissionsMixin):
    """This class is a profile for the sites user"""
    # defining fields here
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(_('staff status'), default=False,
        help_text=_('Designates whether the user can log into this admin '
                    'site.'))    
    # because we gonna overwrite the default user we have to define our new model manager
    
    objects = MSUserManager()

    # for working with auth and admin
    USERNAME_FIELD = 'email' # replacing email with username
    
    REQUIRED_FIELDS = ['name'] # should have name or it will raise error
    
    # later we add forieng keys from other models and here we will have a set of records from other dbs
    # critics_set we can achieve them with double underscore
    # comments_set

    def __str__(self):
        """Return string representation of our user"""
        return self.email