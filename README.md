# snt-magistral
сайт СНТ Магистраль
# Установка
## Для работы сайта потребуется:
* [x] Установить **LTS версию NODE.js** по ссылке: `https://nodejs.org/ru/download/`
* [x] Устанавить **Python 3.10** по ссылке: `https://www.python.org/downloads/release/python-31010/`
## Настройка работы бекэнда
* [x] В папке проекта создаем виртуальное окружение и активируем его:
```
cd snt-magistral
python -m venv .venv
.venv\Scripts\activate.bat
```
* [x] После команды активации в начале командной строки должна быть надпись `(.venv)...` 
* [x] Устанавливаем связи согласно файлу req.txt
```
python.exe -m pip install -r req.txt
```
* [x] Запускаем сервер:
```
python magistral_server/manage.py runserver
```
## Для комфортной работы
* [x] Открываем терминал VS code(или другого аналогичного редактора, но это не точно))  
Запуск виртуальной среды разработки VITE(фронтенд приложения):

```
npm run dev
```
* [x] Запуск виртуальной среды разработки (бекэнд приложения):

```
npm run server
```
* [x]  Запустить две виртуальные среды одной командой(использован пакет concurrently):
```
npm run all
```
## Доступ к документации API Magistral
* [x] Дополнительно установить модуль `drf-yasg`:
```
pip install drf-yasg
```
* [x] Доступ к документации 
* [swagger](http://127.0.0.1:8000/swagger/)
* [redoc](http://127.0.0.1:8000/redoc/)
