from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.utils.dateparse import parse_datetime

from .models import User
from event_payload.serializers import SecurityEventCreateSerializer
from ml_response.ml_client import send_event_to_ml

@api_view(['POST'])
def login_validate(request):
    user_id = request.data.get("user_id")
    password = request.data.get("password")

    if not user_id or not password:
        return Response({"auth_status": "failure"}, status=400)

    try:
        user = User.objects.get(user_id=user_id, is_active=True)
    except User.DoesNotExist:
        auth_status = "failure"
    else:
        auth_status = "success" if password == user.password else "failure"

    # ---- CREATE EVENT ----
    event = SecurityEvent.objects.create(
        timestamp=timezone.now(),
        asset_type="gateway",
        device_id=request.data.get("device_id"),
        device_type="mobile_app",
        device_os=request.data.get("device_os", "unknown"),

        action_type="login",
        resource_type="auth_session",
        auth_status=auth_status,

        ip_address=request.data.get("ip_address"),
        geo_lat=request.data.get("geo_lat", 0),
        geo_long=request.data.get("geo_long", 0),

        owner_user_id=user_id
    )

    # ---- SEND TO ML ----
    send_event_to_ml(event.__dict__)

    return Response({"auth_status": auth_status})
