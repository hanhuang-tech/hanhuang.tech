#!/bin/sh
docker run \
--name web \
-it \
-d \
-v ${PWD}/../certgen_docker:/letsencrypt \
-v ${PWD}/../certgen_docker/certs:/etc/letsencrypt \
-v ${PWD}/html:/usr/share/nginx/html \
-v ${PWD}/../clothingsite/html:/usr/share/nginx/html/clothingsite/ \
-v ${PWD}/conf/nginx.conf:/etc/nginx/nginx.conf \
-v ${PWD}/conf/hanhuang.tech.conf:/etc/nginx/conf.d/hanhuang.tech.conf \
-v ${PWD}/conf/clothingsite.conf:/etc/nginx/conf.d/clothingsite.conf \
-p 80:80 \
-p 443:443 \
web
