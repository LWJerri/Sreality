FROM node:18-slim

WORKDIR /app

COPY package.json ./

RUN npm i pnpm@latest -g

COPY . .

RUN pnpm i
RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "start"]
