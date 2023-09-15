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
