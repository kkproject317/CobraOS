# event_payload/ml_client.py

import requests
from ml_response.models import MLResponse 

ML_API_URL = "http://127.0.0.1:8001/ml/detect/"  # ML project port


def send_event_to_ml(event: dict):
    """
    Sends event payload to ML backend over HTTP
    """

    ml_payload = {
        "event_id": event["event_id"],
        "timestamp": event["timestamp"],

        "asset_type": event["asset_type"],
        "user_id": event["owner_user_id"],

        "action_type": event["action_type"],
        "resource_type": event["resource_type"],

        "auth_status": event["auth_status"],
        "failed_auth_attempts_past_10min": event.get("failed_auth_attempts_5min", 0),

        "ip_address": event["ip_address"],

        "geo_lat": event.get("geo_lat", 0.0),
        "geo_long": event.get("geo_long", 0.0),
        "geo_dist_from_baseline_km": event.get("geo_distance_from_baseline_km", 0.0),

        "farm_lat": event.get("farm_lat", 0.0),
        "farm_long": event.get("farm_long", 0.0),

        "device_type": event["device_type"],
        "device_os": event["device_os"],

        "soil_moisture_percent": event.get("soil_moisture_percent", 0.0),
        "soil_temp_c": event.get("soil_temperature", 0.0),
        "humidity_percent": event.get("soil_humidity", 0.0),

        "weather_consistency_score": event.get("water_consistency_score", 0.0),
        "irrigation_water_volume_liters": event.get("irrigation_water_volume_ltrs", 0.0),

        "sensor_reading_variance": event.get("sensor_reading_variance", 0.0),
        "config_change_flag": int(event.get("config_change_flag", False)),
        "sensor_signal_strength": event.get("sensor_signal_strength", 0.0),
    }

    try:
        response = requests.post(ML_API_URL, json=ml_payload, timeout=3)

        if response.status_code != 200:
            print("❌ ML API error:", response.text)
            return None

        ml_result = response.json()
        print("✅ ML response:", ml_result)

        # ✅ SAVE ML RESPONSE HERE
        MLResponse.objects.create(
            event_id=event["event_id"],
            anomaly_score=ml_result.get("anomaly_probability"),
            prediction="anomaly" if ml_result.get("is_anomalous") else "normal",
            response_action="block" if ml_result.get("is_anomalous") else "allow",
            reasons=ml_result.get("reason", [])
        )

        return ml_result

    except requests.exceptions.RequestException as e:
        print("❌ ML backend unreachable:", str(e))
        return None
