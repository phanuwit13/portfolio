FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

# COPY --from=build /app/package.json .
# COPY --from=build /app/public .

CMD ["node", "server.js"]