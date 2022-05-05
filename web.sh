#!/bin/sh
docker run \
--name web \
-it \
-d \
-v ${PWD}/../certgen_docker/certs:/etc/letsencrypt \
-v ${PWD}/html:/usr/share/nginx/html \
-p 80:80 \
-p 443:443 \
web
