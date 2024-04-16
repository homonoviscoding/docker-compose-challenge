# Docker Challenge PostGres

In this workshop we're going to look at how to use express with a postgres database.

## Learning Objectives
* Startup PostGres Database as Container
* Create Docker Image with current Repo
* Run Image for `docker-challenge-postgres` as a container
* Test calls

## Setup

1. Fork this repository
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm install`, which installs dependencies for the project

For this exercise we will also need to configure our database:

4. Pull docker Image `docker pull postgres`

5. Run and Connect to your PostGres Container. Using a docker compose file.

** Remember to link the PostGres Service in docker compose to a shared volume. **

6. Open the port to enable your connection to the PostGres service

### Run the following
* create-books.sql
* insert-books.sql

7. Update a file `.env` in the __root directory__ of your project. 

8. Type `npm start`, which starts a development server that will reload whenever you make any changes to source files.

## Interacting with the Database
To interact with the database we will use the [node-postgres](https://node-postgres.com/) library. We will use the [query](https://node-postgres.com/features/queries) method to send SQL queries to the database sever and receive responses. The `db/index.js` file establishes the connection to the database. Your instructor will walk through this with you.


## Conclusion
Create a PR to point to current repo with you changes and docker files. Dockerfile, Docker-compose etc. 
* In the PR upload a screenshot of your docker desktop where containers are running. 
* In the PR upload a screenshot of your response when retrieving a list of books. From the container.