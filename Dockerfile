FROM node:20-alpine

RUN npm install -g serve

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["serve", "-l", "4173", "dist"]