FROM nginx:1.17.9-alpine
RUN mkdir -p /usr/share/nginx/html/sosialhjelp
COPY /build /usr/share/nginx/html/sosialhjelp/
COPY default.conf /etc/nginx/nginx.conf
COPY 404.html /usr/share/nginx/html/index.html
