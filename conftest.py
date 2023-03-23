import django
import conftest
from django.conf import settings
# from django.core.management import call_command


# call_command('migrate', interactive=False)


def pytest_configure():
    settings.configure(
        DEBUG=False,
        INSTALLED_APPS=[
            'django.contrib.admin',
            'django.contrib.auth',
            'django.contrib.contenttypes',
            'django.contrib.sites',
            'core',
        ],
        SITE_ID=1,
        MIDDLEWARE_CLASSES=(),
        ROOT_URLCONF='gbible.urls',
        DATABASES={
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': ':memory:',
            }
        }
    )
    django.setup()
