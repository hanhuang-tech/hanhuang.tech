FROM nginx:stable-alpine
COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY conf/hanhuang.tech.conf /etc/nginx/conf.d/
EXPOSE 80
EXPOSE 443
