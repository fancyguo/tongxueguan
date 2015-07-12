import os

from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render

from django.http import HttpResponse, JsonResponse, HttpResponseRedirect

@csrf_exempt
def home(request):
    print("home")
    return JsonResponse({
        "msg": "home page",
        "success": True,
        "status_code": 200
    })
@csrf_exempt
def index(request):
    return HttpResponseRedirect('/static/index.html')