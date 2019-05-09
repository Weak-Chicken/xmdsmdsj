FROM nginx
RUN pwd
COPY xmdsmdsj.vue/dist/index.html /usr/share/nginx/html
RUN touch /var/run/nginx.pid && \
  chown -R www-data:www-data /var/run/nginx.pid && \
  chown -R www-data:www-data /var/cache/nginx
USER www-data