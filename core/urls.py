from core import views
from django.urls import path

urlpatterns = [
    path('api/dapau', views.dapau),
    path('api/login', views.login),
    path('api/register', views.register),
    path('api/logout', views.logout),
    path('api/whoami', views.whoami),
    path('api/settings', views.settings),
    path('api/add_todo', views.add_todo),
    path('api/list_todos', views.list_todos),
    path('api/save-note', views.save_note),
    path('api/get-note', views.get_notes),
]
