from django.http import HttpResponse
from django.shortcuts import render


def hello_world(request):
    return render(request, "base.html", {})


def healthz_view(request):
    return HttpResponse("OK")
