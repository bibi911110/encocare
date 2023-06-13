## Encocare project

### Requirements

1. Install PHP.8.1 or higher
2. Install Mysql
3. Install Node 16.16 or higher

### Configure Enviroment
1. Create DB name with **encocare**
2. Update `.env` file
	- Change **DB_NAME** value  to `encocare`
	- Change **DB_USER** and  **DB_PASSWORD** with your MySQL user
3. Install vendor by run command `composer install` in your project root directory 
4. Install npm by run command `npm install` in your project root 

### DB migration
	php artisan migrate

### Run project
1. run vite dev by run command:

    `npm run dev`
2. run server

    `php artisan server`

Your server running on http://localhost:8000
