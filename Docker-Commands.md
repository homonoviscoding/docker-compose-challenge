# List of some commands used

Create a container and connecting to the container in the terminal
`docker container run --name scrabble -it scrabble-image bash`

Start Docker Process
`docker init`

Build Image for a current repo
`docker build . -t api-express-database`

Run docker image in detachable mode
`docker run --name greengrocers-ui -p 8080:80 -d react-greengrocers-image`

-p is to open ports to your local machine
-p {mymachine-port:container-port}

Run a container using environmental variable for an image
`docker run --name some-postgres -p 5433:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres`

Run a container using environmental variable for an image and link to local directory for files being shared

`docker run --name learn_postgres -e POSTGRES_PASSWORD=docker_user -e POSTGRES_USER=docker_user -p 5433:5432 -v D:/\Docker/\DB:/var/lib/postgresql/data -d postgres`

The above helps to save the DB files to a directory on my machine called `D:\Docker\DB\`

If you unsure what command can be used have a read on the manuals for the commands

```
docker --help
docker run --help
docker images --help
docker build --help
```

Just add `--help` behind the command to help and read through the manual.
