from rest_framework import viewsets
from .models import Prompts
from .serializers import PromptsSerializer

# Create your views here.
class PromptsViewSet(viewsets.ModelViewSet):
    queryset = Prompts.objects.all()
    serializer_class = PromptsSerializer

# Viewsets are classes that provide the logic for handling HTTP requests to your API.
# In summary, this file defines a viewset for the Prompts model, allowing for standard CRUD (Create, Read, Update, Delete) operations to be easily performed via a RESTful API.