from django.urls import path

from . import views

urlpatterns = [
    path("", views.places_page, name="places_page"),
    path("search-places/", views.search_places, name="search_places"),
]
