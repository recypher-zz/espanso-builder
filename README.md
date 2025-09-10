# Espanso-Builder

A small tool used for creating Espanso triggers until the actual developer can create their own GUI as talked about in the roadmap.

## What does it do?

For right now, it just makes basic trigger/replace match configs for the matches YML file.

## How do I use it?

So far the setup is fairly simple, there are several environment variables that need to be configured and I will talk about them later on down the road once they are solidified. `docker-compose.yml` contains all of the environment variables that are required for the operation.  Once you create the `.env` you should be able to run `docker compose up --build` and have a functioning version of the app running locally or on server.