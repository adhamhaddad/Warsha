# Warsha

## Description

This is a (E-commerce / Freelance) platform called `Warsha` that offers all jobs that indeed for houses.

## Dependencies

- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

## Installation

### Database setup

Open postgres terminal with: `psql postgres`

1- `CREATE DATABASE warsha;`

2- `CREATE USER admin WITH PASSWORD 'admin123';`

3- `GRANT ALL PRIVILEGES ON DATABASE warsha TO admin;`

### Create Environment

1. From the root of the repo, navigate backend folder `cd backend` First create file called `.env` and enter the following code:

```
ENV=dev
PORT=8000
# DATABASE CONFIGS
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=admin
DB_NAME=warsha
DB_PASSWORD=admin123
# SECRET KEYS
SECRET_TOKEN=adham123!
SALT=10
PEPER=adham123!
```

2. Second to install the node_modules run `npm install` or `yarn`. After installation is done start the api in dev mode with `npm run dev` or `yarn dev`.

3. Without closing the terminal in step 1, navigate to the frontend `cd frontend` to intall the node_modules `npm install` or `yarn`. After installation is done start the api in dev mode with `npm run start` or `yarn start`.

Note: open `Linker/frontend/src/hooks/use-http.js`

## Unit Tests:

No Unit test available now.

## Built With

- [React](https://reactjs.org/) - Single Page Application Library
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework
- [PostgreSQL](https://www.postgresql.org/) - Open Source Relational Database
