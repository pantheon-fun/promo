FROM node:18.14.0 AS dependencies

RUN mkdir -p /workspace && chown 1000:1000 /workspace
WORKDIR /workspace
USER 1000

ENV NEXT_TELEMETRY_DISABLED=1

COPY --chown=1000:1000 package*.json ./
RUN npm ci --force

FROM dependencies AS prebuild

COPY --chown=1000:1000 . .

RUN npm run res:build

FROM prebuild as build

ENV NODE_ENV=production

RUN npm run build

CMD ["npm", "run", "start"]
