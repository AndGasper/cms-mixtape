#!/bin/sh
# Note: Bash scripting is my thanos

# Update system dependencies
apt update

# Yolo. But really doe, check the hash
curl -sS https://getcomposer.org/installer -o composer-setup.php

# Install composer
php composer-setup.php --install-dir=/usr/local/bin --filename=composer

# Check the version
composer --version

# Install listed dependencies
composer install


# Move the wordpress directory into the source directory
mkdir /src
mv wordpress/wordpress /src/
# Update the symlink
ls
pwd
ls ~

# Composer tries to be helpful and create a symbolic link
# And I just obliterate that

