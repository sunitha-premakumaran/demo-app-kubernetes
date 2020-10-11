# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:10.13 as build-stage

# Set up environment variables
ENV WORK_DIR /app

# See https://crbug.com/795759
RUN apt-get update \
  && apt-get install -yq libgconf-2-4

WORKDIR ${WORK_DIR}

COPY package*.json ${WORK_DIR}

RUN npm install

COPY ./ ${WORK_DIR}

#RUN npm run test -- --browsers ChromeHeadlessNoSandbox --watch=false

ARG configuration

RUN npm run build -- --output-path=./dist/out --configuration $configuration


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
