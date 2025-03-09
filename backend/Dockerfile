FROM golang:alpine AS builder

RUN apk add --no-cache build-base libwebp-dev

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o main .

FROM alpine:latest

RUN apk add --no-cache build-base libwebp-dev

WORKDIR /app

COPY --from=builder /app/main /app/

EXPOSE 8090

CMD ["/app/main", "serve", "--http=0.0.0.0:8090"]
