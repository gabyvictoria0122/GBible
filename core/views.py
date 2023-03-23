# coding: utf-8
import json
from django.http.response import HttpResponse, JsonResponse
from django.contrib import auth
from commons.django_model_utils import get_or_none
from commons.django_views_utils import ajax_login_required
from core.service import log_svc, todo_svc, globalsettings_svc
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from core.models import Profile
from .models import Note


def dapau(request):
    raise Exception('break on purpose')


@csrf_exempt
def register(request):
    if request.method == 'POST':
        user_input = json.loads(request.body)
        username = user_input.get("username")
        email = user_input.get("email")
        password = user_input.get("password")
        # Validação
        if not username or not email or not password:
            return JsonResponse({'error': 'Todos os dados são obrigatórios.'})

        # Validação
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email já está sendo usado.'})

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        profile = Profile(user=user)
        profile.save()
        return JsonResponse({'success': 'Usuario criado com sucesso.'})
    else:
        return JsonResponse({'error': 'Metodo não suportado.'})


@csrf_exempt
def login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = auth.authenticate(username=username, password=password)
    user_dict = None
    if user is not None:
        if user.is_active:
            auth.login(request, user)
            log_svc.log_login(request.user)
            user_dict = _user2dict(user)
    return JsonResponse(user_dict, safe=False)


def logout(request):
    if request.method.lower() != 'post':
        raise Exception('Logout only via post')
    if request.user.is_authenticated:
        log_svc.log_logout(request.user)
    auth.logout(request)
    return HttpResponse('{}', content_type='application/json')


def whoami(request):
    i_am = {
        'user': _user2dict(request.user),
        'authenticated': True,
    } if request.user.is_authenticated else {'authenticated': False}
    return JsonResponse(i_am)


def settings(request):
    le_settings = globalsettings_svc.list_settings()
    return JsonResponse(le_settings)

@ajax_login_required
def add_todo(request):
    todo = todo_svc.add_todo(request.POST['new_task'])
    return JsonResponse(todo)


@ajax_login_required
def list_todos(request):
    todos = todo_svc.list_todos()
    return JsonResponse({'todos': todos})

@csrf_exempt
def save_note(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode())
        user = User.objects.filter(id=data["user_id"])
        text= data['text']
        time = data['time']
        note = Note.objects.create(user=user[0], text=text, time=time)
        note.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success':False})


def get_notes(request):
    notes = Note.objects.filter(user=request.user)
    nota = {}
    for note in notes:
        nota = {
            "text": note.text,
            "time": note.time
        }
    return JsonResponse(nota)


def mostra_note(request):
    notes = todo_svc.list_notes(request)
    return JsonResponse({"notes":notes})


def _user2dict(user):
    d = {
        'id': user.id,
        'name': user.get_full_name(),
        'username': user.username,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
        'permissions': {
            'ADMIN': user.is_superuser,
            'STAFF': user.is_staff,
        }
    }
    return d
