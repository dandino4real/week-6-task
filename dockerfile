
FROM node:16-alpine3.16
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN npx tsc
EXPOSE 3001
ENV PORT=3000
ENV SESSION_SECRET=gfkygekqi3gubjhb67@123@#$
CMD ["yarn", "serve"]

