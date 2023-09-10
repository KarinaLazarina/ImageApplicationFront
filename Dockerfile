FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY dist/image-application-front/* /usr/share/nginx/html
