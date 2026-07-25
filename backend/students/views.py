from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Student
import json

@csrf_exempt
def add_student(request):
    if request.method == "POST":
        data = json.loads(request.body)

        student = Student.objects.create(
            name=data["name"],
            age=data["age"],
            course=data["course"]
        )

        return JsonResponse({
            "message": "Student Added Successfully",
            "id": student.id
        })