ARG NODE_VERSION=22.14.0
ARG NPM_REGISTER=https://registry.npmjs.org
ARG BASE_URL=/vitepress-books/

# Builder
FROM node:${NODE_VERSION}-bookworm AS builder
ARG NPM_REGISTER
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm -v \
    && npm config set registry $NPM_REGISTER \
    && npm install -g pnpm \
    && pnpm -v \
    && pnpm config set registry $NPM_REGISTER \
    && pnpm install

COPY . ./

RUN pnpm build

# Nginx Server
FROM nginx:1.27.4-alpine3.21-slim
ARG BASE_URL
WORKDIR /usr/share/nginx/html${BASE_URL}
COPY --from=builder /app/docs/.vitepress/dist ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
