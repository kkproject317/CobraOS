from django.urls import path
from .views import login_validate

urlpatterns = [
    # path("users/create/", create_user, name="create-user"),
    path("users/login/",login_validate, name="login_validate")
]
