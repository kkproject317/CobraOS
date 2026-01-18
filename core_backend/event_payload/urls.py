from django.urls import path
from .views import create_security_event,ingest_security_event

urlpatterns = [
    path("events/create/", create_security_event, name="create-security-event"),
    path("events/simulateAttack/", ingest_security_event, name="simulate-attack")
]
