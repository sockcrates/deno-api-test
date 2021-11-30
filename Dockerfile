# Build
FROM denoland/deno AS build-step

WORKDIR /usr/build
RUN chown deno:deno .

USER deno

COPY deps.ts .
RUN deno cache deps.ts

COPY . .
RUN deno cache mod.ts

RUN deno compile --output deno-api --allow-net --allow-read mod.ts

# Deploy
FROM alpine

ENV SERVER_PORT=8080

WORKDIR /usr/deploy

COPY .env .

COPY --from=build-step /usr/build/deno-api .

EXPOSE ${SERVER_PORT}

ENTRYPOINT ["/usr/deploy/deno-api"]
