import os

from django.shortcuts import render

from django.http import HttpResponse, JsonResponse, HttpResponseRedirect


def home(request):
    return JsonResponse({
        "msg": "",
        "success": True,
        "status_code": 200
    })

def index(request):
    return HttpResponseRedirect('/')