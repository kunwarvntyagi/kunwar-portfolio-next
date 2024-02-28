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
EXPOSE 8080
EXPOSE 8000
EXPOSE 80
EXPOSE 443

ENTRYPOINT ["npm", "start"]