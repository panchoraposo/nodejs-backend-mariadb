podman run -d --name sensor-indoor-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=r00tpassword -e MYSQL_USER=sensor -e MYSQL_PASSWORD=sensor -e MYSQL_DATABASE=events registry.redhat.io/rhel9/mysql-80:1-197
