FROM node:12.18.3-slim as base
# Change shell from sh to bash
SHELL ["/bin/bash", "-c"]
# Set environment variables
ENV WORK_DIR /app/
# Set Working Directory
RUN mkdir -p $WORK_DIR
# Install dependencies
RUN buildDeps='libpq-dev' \
  && apt-get update \
  && apt-get install -y --no-install-recommends $buildDeps
WORKDIR $WORK_DIR


FROM base as build-stage
# Install dependencies
RUN buildDeps='g++ make python libdpkg-perl' \
  && apt-get update \
  && apt-get install -y --no-install-recommends $buildDeps
# Set up app
COPY package*.json $WORK_DIR
RUN npm install
COPY . $WORK_DIR
# Build app
RUN npm run build
RUN npm prune --production


# Ditch build stage and repack for release
FROM base as release
COPY --from=build-stage $WORK_DIR $WORK_DIR
EXPOSE 4000
USER node
CMD ["node","./dist/main.js"]
