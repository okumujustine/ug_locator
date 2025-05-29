from django.urls import path

from . import views

urlpatterns = [
    path("", views.ListCategories.as_view() , name="categories_list"),
    path("places_page/", views.places_page, name="places_page"),
    path("search-places/", views.search_places, name="search_places"),
]
