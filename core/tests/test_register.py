import json
from django.test import Client
from django.contrib.auth.models import User
from django.core.management import call_command
from django.test import RequestFactory
import pytest
from core.views import register


class TestRegister:
    @classmethod
    def setUpClass(cls):
        call_command('migrate')

    @pytest.mark.django_db
    def test_register_success(rf: RequestFactory):
        rf = Client()
        data = {
            'username': 'testuser',
            'email': 'test@test.com',
            'password': 'testpassword'
        }
        request = rf.post('api/register', json.dumps(data), content_type='application/json')
        response = register(request)
        assert response.status_code == 200
        # assert response.json() == {'success': 'Usuario criado com sucesso.'}

    @pytest.mark.django_db
    def test_register_missing_data(self):
        c = Client()
        data = {
            'username': 'testuser',
            'email': '',
            'password': 'testpassword'
        }
        response = c.post('api/register', json.dumps(data), content_type='application/json')
        assert response.status_code == 400
        assert response.json() == {'error': 'Todos os dados são obrigatórios.'}

    @pytest.mark.django_db
    def test_register_email_in_use(self):
        User.objects.create_user(username='existinguser', email='test@example.com', password='testpassword')
        c = Client()
        data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'testpassword'
        }
        response = c.post('api/register', json.dumps(data), content_type='application/json')
        assert response.status_code == 400
        assert response.json() == {'error': 'Email já está sendo usado.'}


@pytest.mark.django_db
def test_register_wrong_method(rf : RequestFactory):
    request = rf.get('/api/register')
    response = register(request)

    assert response.status_code == 405
    assert response.content == b'{"error": "Metodo n\\u00e3o suportado."}'
