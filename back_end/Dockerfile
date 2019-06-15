FROM php:7.3.6-apache
# This should probably be the composer.lock but meh
COPY ./composer.json ./
# Copy over the entrypoint instructions
COPY ./docker-entrypoint.sh ./
ENTRYPOINT [ "./docker-entrypoint.sh" ]