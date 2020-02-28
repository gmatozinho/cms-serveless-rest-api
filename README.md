# cms-serveless-rest-api

Serverless api built from a CMS application for learning/apply some serverless and aws infraestructure concepts.

## Install the serverless cli

```
npm install -g serverless
```

## Init with serverless

```bash
serverless login
serverless
```

## Use-case

Test your service locally, without having to deploy it first.

## Setup

```bash
npm install
serverless dynamodb install
serverless offline start
serverless dynamodb migrate (this imports schema)
```

## Run service offline

```bash
serverless offline start
```

## Deploy

```
serverless deploy
```