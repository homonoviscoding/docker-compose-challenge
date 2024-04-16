# Docker Challenge PostGres

In this workshop we're going to look at how to use express with a postgres database.

## Learning Objectives
* Startup PostGres Database as Container
* Create Docker Image with current Repo `docker-challenge-postgres`
* Run Image for `docker-challenge-postgres` as a container
* Make API call to Create, Retrieve all books etc.

## Setup

1. Fork this repository `docker-challenge-postgres`
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm install`, which installs dependencies for the project
4. Pull docker Image for PostGres `docker pull postgres`.
5. Run `docker init`.
6. Run and Connect to your PostGres Container. Using a docker compose file. 

** Remember to setup the volume in docker compose file for the PostGres Service.**

7. Open a port to enable your connection to the PostGres container.
8. Run the following database scripts
  * create-books.sql
  * insert-books.sql

9. Update a file `.env` in the __root directory__ of your project with you PostGres Container details. 

10. Type `npm start`, which starts a development server that will reload whenever you make any changes to source files.

## Conclusion
Create a PR to point to current repo with you changes and docker files. Dockerfile, Docker-compose etc. 
* In the PR upload a screenshot of your docker desktop where containers are running. 
* In the PR upload a screenshot of your response when retrieving a list of books. From the container.