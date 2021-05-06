FROM hayd/deno:debian-1.9.2 as builder
WORKDIR /work
COPY . /work
RUN deno cache --config ./tsconfig.json src/ssr.tsx
RUN deno compile --unstable --allow-net --config ./tsconfig.json -o jsx-app src/ssr.tsx

FROM debian:buster-slim
WORKDIR /app
COPY --from=builder /work/jsx-app .

CMD ["./jsx-app"]
