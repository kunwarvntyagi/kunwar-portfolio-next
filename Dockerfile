FROM node:20

WORKDIR /app

COPY package*.json ./
COPY .env ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run export

ENV NODE_ENV production

ENV PORT 3000
EXPOSE 3000

ENTRYPOINT ["npm", "start"]