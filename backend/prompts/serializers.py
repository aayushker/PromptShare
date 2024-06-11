from rest_framework import serializers
from .models import Prompts

class PromptsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prompts
        fields = '__all__'
        
# Purpose of the Serializer:

# The primary purpose of this serializer is to convert instances of the Prompts model into a format that can be easily rendered into JSON, XML, or other content types. 
# This is particularly useful for building APIs, as it allows for the easy transmission of data between the server and clients (e.g., web browsers, mobile apps).
# Similarly, the serializer can be used to parse incoming data, validating and converting it into model instances for saving to the database. 
# This makes handling client-submitted data safer and more convenient.

# In summary, the PromptsSerializer is a DRF ModelSerializer for the Prompts model, designed to facilitate the serialization and deserialization of Prompts instances to and from various formats, primarily JSON, for use in APIs.