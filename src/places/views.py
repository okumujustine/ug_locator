from django.contrib.gis.geos import Point
from django.contrib.gis.measure import D
from django.shortcuts import render

from .models import Category, Place


def place_list(request):
    categories = Category.objects.all()
    places = Place.objects.all()

    user_lat = request.GET.get("lat")
    user_lng = request.GET.get("lng")
    distance_km = request.GET.get("distance", 10)
    category_id = request.GET.get("category")

    if user_lat and user_lng:
        user_location = Point(float(user_lng), float(user_lat), srid=4326)
        places = places.filter(
            location__distance_lte=(user_location, D(km=distance_km))
        )

    if category_id:
        places = places.filter(category_id=category_id)

    context = {
        "places": places,
        "categories": categories,
    }
    return render(request, "places/place_list.html", context)
