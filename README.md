# CRUD App
FullStack приложение, в котором есть возомжность сделать четыре базовые операции - создать, посмотреть, изменить и удалить пользователя
# Стек технологий
1. NextJS
2. React-Bootstrap
3. Axios
4. Express
5. Express-Validator
6. Mongoose
# Запуск
Для запуска проекта локально нужно:
1. Установить NodeJS: https://nodejs.org/
2. Клонировать репозиторий: `git clone https://github.com/byteCD/crud-app.git`
3. В папке `client` создать файл `.env` и в нем создать переменную `NEXT_PUBLIC_SERVER_URL`, в которую нужно присвоить адрес, по которому будет доступен сервер
4. В папке `server` создать файл `.env` и в нем создать переменную `PORT`, в которую нужно присвоить порт сервера, создать переменную `DB_URL`, в которую нужно присвоить строку подключения к MongoDB, создать переменную `CLIENT_URL`, в которую нужно присвоить адрес, по которому будет доступен клиент
5. Установите необходимые пакеты: `npm install`
6. Запустить проект: `npm start`
7. Открыть его по ссылке: http://localhost:3000
