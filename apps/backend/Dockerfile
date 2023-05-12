FROM node:18-slim

WORKDIR /app

COPY package.json .npmrc ./

RUN npm i pnpm@latest -g

COPY . /app
COPY prisma/ ./prisma

RUN pnpm i
RUN pnpm prisma generate
RUN pnpm run build

EXPOSE 8081

CMD ["pnpm", "start"]
