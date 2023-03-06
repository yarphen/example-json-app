# Example JSON App

## The scripts:

- start: A script to start the server in production mode.
- dev: A script to start the server in development mode with nodemon.
- lint: A script to run ESLint on the project files.

## The routes include:

- GET /json-files: This route returns a list of JSON files based on an optional query parameter.
- GET /json-files/:id/download: This route downloads a JSON file with the given ID.
- POST /json-files: This route uploads a JSON file with a name and description, and creates a new record for it.
- DELETE /json-files/:id : This route deletes the JSON file with the given ID.
- GET /health: This route returns OK message to ensure it is running.
