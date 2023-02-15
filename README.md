# Sobre o Projeto

[Link video explicativo](https://youtu.be/M9boBE1XHyI)

GBible é um projeto mobile first, fullstack, baseado no [template Djavue2](https://github.com/evolutio/djavue2) que permite você ler facilmente, e de maneira prática, todos os 66 livros da Bíblia, em suas varias versões e idiomas. Em features futuras, GBible também será capaz de registrar versículos/cápitulos já lidos, realizar marcações e anotações personalizadas da maneira que o usuário(a) desejar.

Escolhi esse tema porque senti falta de pequenos detalhes ao utilizar outros apps desse mesmo tema. Por exemplo:

 * Permitir o usuário grifar uma palavra especifica;

 * Registrar os capítulos/versículos já lidos; 

 * Montar planos de leitura. Ex: prever quantos capítulos ler para conseguir ler a bíblia toda em um ano;   

 * Ter hinos da harpa (sujestão de um amigo).
 
 
Obviamente não implementei todas as ideias acima, mas ler o conteudo bíblico funciona tanto na API quanto na APImock. E só de fazer essa parte básica consegui dar uma aprimorada nas minhas habilidades com o Vuetify, implementar uma APImock e me lembrar que **devo** revisar Django, pois fiquei muito travada nessa parte. 
 


https://user-images.githubusercontent.com/104435995/219044063-501ce062-37f1-4884-bae9-bbaff8242a97.mp4


 

# Como rodar
## 1. Dev-env, super-easy mode (docker all things)

Clone this repository and follow the steps below.

Step by step

```bash
source dev.sh  # import useful bash functions
devhelp  # like this one ;)
dkbuild  # builds the docker image for this project. The first time Will take a while.
dknpminstall  # I'll explain later!
dkup  # Brings up everything
```

With `dkup` running, open another terminal

```bash
dk bash  # starts bash inside "gbible" container
./manage.py migrate  # create database tables and stuff
./manage.py createsuperuser  # creates an application user in the database
```

What is happenning:

* `dev.sh` is a collection of useful bash functions for this project's development environment. You're encouraged to look inside and see how that works, and add more as the project progresses.
* `dknpminstall` will start a docker container and run `npm install` inside to download node dependencies to the `frontend/node_modules` folder. Using docker for this means you don't need to worry about installing (and choosing version for) node/npm.
* `dkup` uses docker-compose to start 3 containers: postgres, nginx, and gbible.
* The dockerized postgres saves its state into `docker/dkdata`. You can delete that if you want your dev database to go kaboom.
* Once `dkup` is running, `dk <command>` will run `<command>` inside the `gbible` container. So `dk bash` will get you "logged in" as root inside that container. Once inside, you need to run Django's `manage.py` commands to initialize the database properly.
* The gbible container runs 3 services:
 * django on port 8000
 * nuxt frontend with real APIs on port 3000
 * nuxt frontend with mock APIs on port 3001
* nginx is configured to listen on port 80 and redirect to 8000 (requests going to `/api/*`) or 3000 (everything else).
* Therefore, when `dkup` is running, you get a fully working dev-environment by pointing your browser to http://localhost, and a frontend-only-mock-api-based environment by pointing your browser to http://localhost:3001. Each one is more useful on different situations.
* You're supposed to create features first by implementing them on 3001, then validate them, and only then write the backend APIs and integrate them. Experience shows this process is very productive.

## 2. Dev-env, normal-easy mode (dockerize nginx + postgres)

Running everything inside docker is a quick and easy way to get started, but sometimes we need to run things "for real", for example, when you need to debug python code.

### Python setup

Requirements:
 - Understand about python [virtualenvs](https://docs.python.org/3/tutorial/venv.html)
 - Install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) (not required, but recommended)

Step by step

```bash
dkpgnginx  # Starts postgres and nginx inside docker
```

With `dkpgnginx` running, start another terminal:

```bash
mkvirtualenv gbible -p python3  # creates a python3 virtualenv
pip install -r requirements.txt  # install python dependencies inside virtualenv
export DJANGO_DB_PORT=5432  # That's where our dockerized postgres is listening
./manage.py runserver  # starts django on port 8000
```

Since nginx is also running you go ahead and point your browser to http://localhost/admin and you should see the same thing as in http://localhost:8000/admin

## Node Setup

Requirements:

* Install [nvm](https://github.com/creationix/nvm) (not required, but highly recommended)

Step by step:

```bash
nvm use 12  # Switch your terminal for node version 9.x
# no need to npm install anything, we already have our node_modules folder
sudo chmod -R o+rw .nuxt/  # I'll explain this later
npm run dev  # Starts nuxt frontend on port 3000
```

You can go ahed and point your browser to http://localhost:3000 to see nuxt running **with mocked apis**

To run nuxt using real APIs just turn set this environment variable API_MOCK=0

```bash
API_MOCK=0 npm run dev  # Starts nuxt frontend on port 3000
```

Since nginx is also running you go ahead and point your browser to http://localhost/ and you should have a fully integrated frontend+backend dev env.
