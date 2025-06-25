# Running Storybook with Docker

This project includes a Dockerfile to build and run Storybook in a containerized environment.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your machine

## Building the Docker Image

To build the Docker image, run the following command from the project root:

```bash
docker build -t lido-ui-storybook .
```

This will create a Docker image named `lido-ui-storybook` with all the necessary dependencies and build the Storybook static files.

## Running the Storybook Container

To run the Storybook container, use:

```bash
docker run -p 5555:5555 lido-ui-storybook
```

This will start the Storybook server and make it accessible at http://localhost:5555 in your browser.

## Development with Docker

If you want to develop while using Docker, you can mount your local directory to see changes in real-time:

```bash
docker run -p 5555:5555 -v $(pwd):/app lido-ui-storybook
```

Note: When using volume mounting, you might need to run `yarn install` inside the container if you add new dependencies.

## Using Docker Compose (Alternative)

You can also create a `docker-compose.yml` file for easier management:

```yaml
version: '3'
services:
  storybook:
    build: .
    ports:
      - "5555:5555"
    volumes:
      - .:/app
      - /app/node_modules
```

Then run:

```bash
docker-compose up
```

This will build the image if needed and start the container with the appropriate volume mounts and port mappings.
