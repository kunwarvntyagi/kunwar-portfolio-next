FROM node:20

WORKDIR /app

COPY package*.json ./
COPY .env ./
RUN npm install
COPY . .
RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

ENTRYPOINT ["npx", "serve", "out"]