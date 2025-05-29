from django.contrib.gis.geos import Point
from django.contrib.gis.measure import D
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import CategorySerializer
from .models import Category, Place




class ListCategories(APIView):
    """
    API view to list all categories.
    """
    def get(self, request, *args, **kwargs):
        places = Category.objects.all()
        serializer = CategorySerializer(places, many=True)
        return Response(serializer.data)
    

def places_page(request):
    categories = Category.objects.all()

    return render(request, "places/place_list.html", {"categories": categories})


def search_places(request):
    places = Place.objects.all()

    user_lat = request.GET.get("lat")
    user_lng = request.GET.get("lng")
    distance_km = request.GET.get("distance", 10)
    category_id = request.GET.get("category")
    place_name = request.GET.get("place_name")

    if place_name:
        places = places.filter(name__icontains=place_name)

    if user_lat and user_lng:
        user_location = Point(float(user_lng), float(user_lat), srid=4326)
        places = places.filter(
            location__distance_lte=(user_location, D(km=distance_km))
        )

    if category_id:
        places = places.filter(category_id=category_id)

    context = {
        "places": places,
    }
    return render(request, "places/_places_cards.html", context)
