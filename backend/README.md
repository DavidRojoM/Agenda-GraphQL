### Run mongo container

`docker run -d -p 27017:27017 -v YOURDIRECTORY:/data/db --name CONTACTS -e MONGO_INITDB_ROOT_USERNAME=YOURUSERNAME -e MONGO_INITDB_ROOT_PASSWORD=YOURPASSWORD mongo:latest`


### TODO

- [ ] Fix environment variables
- [ ] Fix mongo conn using user/password auth
