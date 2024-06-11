from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PromptsViewSet

router = DefaultRouter()
router.register(r'prompts', PromptsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

# urls.py file is configuring URL routes for a Django application, specifically integrating Django REST Framework's routing system to handle API requests
# this file sets up URL routing for a Django app, using Django REST Framework's DefaultRouter to automatically generate routes for a viewset that handles CRUD operations on prompts. 
# This allows for a clean and efficient way to map HTTP requests to the appropriate view logic based on the URL.