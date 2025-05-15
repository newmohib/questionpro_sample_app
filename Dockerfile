FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run prisma:generate

CMD ["sh", "-c", "npm run prisma:migrate && node src/server.js"]