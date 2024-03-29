# snt-magistral
сайт СНТ Магистраль
# Установка
## Для работы сайта потребуется:
* [x] Установить **LTS версию NODE.js** по ссылке: `https://nodejs.org/ru/download/`
* [x] Устанавить **Python 3.10** по ссылке: `https://www.python.org/downloads/release/python-31010/`
## Настройка работы бекэнда
* [x] В папке проекта создаем виртуальное окружение и активируем его:
```bash
cd snt-magistral
python -m venv .venv
.venv\Scripts\activate.bat
```
* [x] После команды активации в начале командной строки должна быть надпись `(.venv)...` 
* [x] Устанавливаем связи согласно файлу req.txt
```bash
python.exe -m pip install -r req.txt
```
* [x] Запускаем сервер:
```bash
python magistral_server/manage.py runserver
```
## Для комфортной работы
* [x] Открываем терминал VS code(или другого аналогичного редактора, но это не точно))  
Запуск виртуальной среды разработки VITE(фронтенд приложения):

```bash
npm run dev
```
* [x] Запуск виртуальной среды разработки (бекэнд приложения):

```bash
npm run server
```
* [x]  Запустить две виртуальные среды одной командой(использован пакет concurrently):
```bash
npm run all
```
## Доступ к документации API Magistral
* [x] Дополнительно установить модуль `drf-yasg`:
```bash
pip install drf-yasg
```
* [x] Доступ к документации 
* [swagger](http://127.0.0.1:8000/swagger/)
* [redoc](http://127.0.0.1:8000/redoc/)
## Работа с фикстурами
* [x] Создать фикстуры по приложениям :
```shell
python -Xutf8 manage.py dumpdata app_label.ModelName --indent 2 -o app_label/fixtures/app_label.json
```
* [x] Загрузить фикстуры :
```shell
py manage.py loaddata auth advertisement_app document_app site_settings voting forum
```
## Работа с Django Shell по созданию нескольких пользователей
* [x] Запустить Django Shell:
```shell
python manage.py shell
```
* [x] Ввести команду создания 9 юзеров:
```pyton
from django.contrib.auth.models import User
list([User.objects.create_user('User' + str(i), password='1234') for i in range(1, 10)])
```
