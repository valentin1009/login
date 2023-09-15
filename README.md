# Introduction

This project contain.

- container for Frontend (React)
- container for Backend (NodeJS)
- container for Database (Postgres)
- container for pgAdmin

# Get started

1. Clone this project
2. Start all containers
```bash
docker-compose up -d
```
3. Enter in Backend container to run migrations&seeds:
```bash
docker-compose exec backend sh
```
4. Run migration
```bash
npx prisma migrate dev
```
5. Run seeds to insert some dummy date in DB
```bash
npx prisma db seed
```
Now you have the project up and running
# General

- The project is available on [http://localhost:3000](http://localhost:3000)
- Demo user data:
    - bob@prisma.io / testtest
    - alice@prisma.io / testtest
- Both users have lat and long for Bucharest, so you should see the current temperature for Bucharest in dashboard

# Notes
- The backend logic is a bit more advanced than FE. When I saw the test for the first time I thought I'll need a more advanced auth system to make the second request to BE. So you'll find in BE a JWT auth logic, but right now is dead code. I keep the code there for further development steps.
- You can use pgAdmin to access database using a UI.
  - URL: http://localhost:5000
  - You can find pgAdmin user&pass in docker-compose. Also there you can find 