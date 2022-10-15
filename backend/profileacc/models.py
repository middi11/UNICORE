from multiprocessing import set_forkserver_preload
from multiprocessing.sharedctypes import Value
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

CLERK = "Clerk"
MANAGER = "Manager"

ROLE_CHOICES = (
        (CLERK, 'Clerk'),
        (MANAGER, 'Manager'),
    )

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name, **extra_fields)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, name, password=None):
        user = self.create_user(email, name, password)

        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    role = models.CharField(choices=ROLE_CHOICES, blank=True, null=True, max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','role']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email
