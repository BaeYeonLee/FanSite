# FanSite
> ### Express + Vue codebase project.

You can view a live demo over at [http://piglet911.cafe24.com/iu](http://piglet911.cafe24.com/iu)

## Getting started

1. Create .env files in the back-end directory. ( Setting MySQL Environment Variables File )

```bash
# in .env
# MySQL configuration
MYSQL_HOST      : Database server ip
MYSQL_PORT      : Database server port
MYSQL_DATABASE  : Database name
MYSQL_USER_ID   : Database account
MYSQL_USER_PW   : Database password
```

-   If you want tracking this file, run this command

```bash
# Dockerfile tracking
> git update-index --no-assume-unchanged ./back-end/.env
# Dockerfile untracking
> git update-index --assume-unchanged ./back-end/.env
# Untracking file check
> git ls-files -v | grep "^[[:lower:]]"
```

2. Run Service

```bash
# Build Docker Image
> ./bin/run.sh build

# Running Docker
> ./bin/run.sh start
```

-   If you running service with production environment, please check nginx config file
    -   Config derectory path : /etc/nginx/conf.d
    -   Setting nginx public location

```bash
# in nginx.conf
location /iu/ {
    proxy_pass 'Project Host';
    # ex) proxy_pass http://fansite-iu;
}
```