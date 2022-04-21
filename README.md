# hanhuang.tech  
- Starts up an Nginx container in Docker that hosts static files for above mentioned domain.  
- Requires certbot_gen_docker to generate certificates for TLS. Run the former before starting web.sh.   
- Features:  
  * HTTP2  
  * Require TLS 1.2 or 1.3  
  * Redirection to HTTPS encryption via SSL Certificate via certbot_gen_docker  
  * Frontend static site featuring html, css and javascript
  
**Dockerfile**  
Nginx: From nginx alpine image, copy nginx.conf and hanhuang.tech.conf, from host /conf directory to standard nginx directories inside container.  
Expose: Map to tcp ports http (80) and https (443).  
  
**web.sh**  
Shell script: Docker run the "web" docker image built from dockerfile, and creates an interactive container called "web".  
Volume: Mounts from host /certs directory, generated by certbot_gen_docker which contains TLS certificates required for https of domain.    
Volume: Mounts from host /html directory to standard nginx /usr/share/nginx/html directory inside hosted container.   
Publishes exposed ports from Dockerfile 80 and 443.  
  
---  
### conf/  
**hanhuang.tech.conf**  
hanhuang.tech server block.  
http (port 80) automatically redirects to https (port 443).  
Try_files: Permits use of direct uri to access html pages.  
Try_files: Permits use of directories in uri on this domain to access index.html pages.  
Denies all access to /. (hidden files).  
  
### html/  
**html**, **css**, **js**, and **img**.  
For explanation about use of these files please visit [hanhuang.tech](https://hanhuang.tech "hanhuang.tech home page").
