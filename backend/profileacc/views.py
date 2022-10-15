from django.shortcuts import render
from .models import ROLE_CHOICES
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class RoleChoices(APIView):
    permission_classes = (AllowAny, )
    def get(self, request, format=None):

        my_choices = []
        choice_dict = dict(ROLE_CHOICES)
        for key, value in choice_dict.items():

            itered_dict = {"key": key, "value": value}
            my_choices.append(itered_dict)

        return Response(my_choices, status=status.HTTP_200_OK)