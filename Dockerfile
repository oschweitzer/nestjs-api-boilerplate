FROM node:10-alpine as dist
WORKDIR /tmp/
COPY . .
RUN npm install
RUN npm run build
RUN rm -rf src nodemon.json test Dockerfile README.md

FROM node:10-alpine
WORKDIR app
COPY --from=dist /tmp/ ./
ENTRYPOINT ["npm", "run"]
CMD ["docker"]
