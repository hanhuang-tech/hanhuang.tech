#!/bin/sh
docker run \
--name web \
--rm \
-it \
-d \
-v ${PWD}/../certbot_gen_docker/certs:/etc/letsencrypt \
-v ${PWD}/html:/usr/share/nginx/html \
-p 80:80 \
-p 443:443 \
web
