#!/bin/sh

docker run \
--name web \
-it \
-d \
-v ${PWD}/../certbot_gen_docker/certs:/etc/letsencrypt \
-p 80 \
-p 443 \
web
