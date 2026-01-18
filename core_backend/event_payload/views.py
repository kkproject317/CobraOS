from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SecurityEventCreateSerializer
from ml_response.ml_client import send_event_to_ml


@api_view(['POST'])
def create_security_event(request):
    serializer = SecurityEventCreateSerializer( data=request.data, partial=True)

    if serializer.is_valid():
        event = serializer.save()
        return Response(
            {
                "message": "Security event created successfully",
                "event_id": event.event_id
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def ingest_security_event(request):
    serializer = SecurityEventCreateSerializer(data=request.data, partial=True)

    if not serializer.is_valid():
        return Response(serializer.errors, status=400)

    event = serializer.save()

    # ✅ JSON-safe payload
    ml_payload = SecurityEventCreateSerializer(event).data
    send_event_to_ml(ml_payload)

    return Response(
        {
            "message": "Event recorded",
            "event_id": event.event_id
        },
        status=201
    )
