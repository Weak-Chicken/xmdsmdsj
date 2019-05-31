# xmdsmdsj

## Before deploy

If you wish to deploy this system on the Internet, make sure you have checked the following places before deploy.

1. The docker-compose file. Change the database login credit in ./docker-compose.yml.

```docker
  mysql:

    ...
    # Change these three lines
    environment:
      MYSQL_ROOT_PASSWORD: "Yourpassw0rd!"
      MYSQL_USER: 'jon_test'
      MYSQL_PASS: 'Y0urpassword?'
    
    ...

```

Meanwhile, also change the ports setting in ./docker-compose.yml to allocate different ports for your application.

```docker
version: '3'

services:
  web:

    ...
    # Change the ports lines. Of course for the 80 port, it is ok to leave it there.
    ports:
      - "80:8080"

  mysql:

    ...
    # Change the ports lines.
    ports:
        - "3306:3306"
```

2. 