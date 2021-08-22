#!/bin/bash

# set -e # 오류가 발생하면 스크립트 종료
# set -x # 수행하는 명령어를 출력 후 실행

# Find Project Directory
SCRIPT=$(realpath -s $0)
SCRIPT_DIR=$(dirname $SCRIPT)
PREJ_ROOT_DIR=$(dirname $SCRIPT_DIR)

# Set Front-end Directory
FRONT_DIR=$PREJ_ROOT_DIR/front-end-refactoring

# Set Docker Container Name
DOCKER_NAME=$2
[ -z "$DOCKER_NAME" ] && DOCKER_NAME="fansite_iu"

# Set Service Port
SERVICE_PORT=8001

# Change Directory : Project Root
cd $PREJ_ROOT_DIR

case $1 in
    check)
        docker top $DOCKER_NAME > /dev/null
        echo $?
        ;;
    start)
        docker run --name $DOCKER_NAME -p 0.0.0.0:$SERVICE_PORT:80 -d $DOCKER_NAME
        ;;
    stop)
        docker stop $DOCKER_NAME
        docker rm $DOCKER_NAME
        ;;
    restart)
        docker restart $DOCKER_NAME
        ;;
    reboot)
        $0 stop
        $0 start
        ;;
    build)
        yarn --cwd $FRONT_DIR install
        yarn --cwd $FRONT_DIR build
        docker build --no-cache -t $DOCKER_NAME .
        rm -rf $FRONT_DIR/node_modules $FRONT_DIR/dist
        rm $FRONT_DIR/yarn.lock
        ;;
    logs)
        docker logs --tail 100 --follow --timestamps $DOCKER_NAME
        ;;
    exec)
        docker exec -it $DOCKER_NAME bash
        ;;
    *)
        echo ""
        echo "Usage:"
        echo "  ${0} < Command > < Docker Name:optional >"
        echo ""
        echo "Command:"
        echo "  check       Display the running processes of a container"
        echo "  start       Start services PRODUCTION env"
        echo "  stop        Stop services containers"
        echo "  restart     Restart services"
        echo "  reboot      Re create service continer"
        echo "  update      Build webpack bundles"
        echo "  build       Build or rebuild services"
        echo "  logs        Fetch the logs of a container"
        echo "  exec        Execute a command in a running container"
        echo ""

        exit 1
esac

exit $?