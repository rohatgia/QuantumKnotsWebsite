from .models import Project
from rest_framework.decorators import api_view
from .serializers import ProjectSerializer
from rest_framework.response import Response

# Create your views here.
@api_view(['get'])
def fetch_projects(request):
    #fetch all the project objects
    projects = Project.objects.all()
    #send the project as a response
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)