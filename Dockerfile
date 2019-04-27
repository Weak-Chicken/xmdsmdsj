FROM nginx
COPY index.html /usr/share/nginx/html
COPY static /usr/share/nginx/html/static
RUN touch /var/run/nginx.pid && \
  chown -R www-data:www-data /var/run/nginx.pid && \
  chown -R www-data:www-data /var/cache/nginx
USER www-data