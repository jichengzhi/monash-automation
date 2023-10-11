FROM node:20-alpine

RUN npm install -g serve

WORKDIR /

COPY dist /build

CMD ["serve", "-l", "4173", "/build"]