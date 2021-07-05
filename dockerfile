# 기본 이미지를 node:14.17.1 ( 21.06.24 기준 LTS 버전 )로 설정
FROM node:14.17.1

RUN apt-get update \
 && apt-get install -y nginx \
 && mkdir /app

# Copy NGINX Config
COPY ./docker/config /etc/nginx/sites-enabled

# Copy Backend & Frontend
COPY ./back-end /app/back-end
COPY ./front-end-refactoring/dist /app/front-end

# Copy entrypoint.sh
COPY ./docker/entrypoint.sh /app/entrypoint.sh

# Docker 내에서 코드를 실행할 폴더 위치를 /app 로 지정
WORKDIR /app

# Container 실행 시 entrypoint.sh 실행
ENTRYPOINT ./entrypoint.sh