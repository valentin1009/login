FROM node:18

WORKDIR /app

COPY ./backend/ ./

RUN npm install

RUN npm install -g prisma
RUN prisma generate

EXPOSE 3001

CMD [ "npm", "run", "start" ]