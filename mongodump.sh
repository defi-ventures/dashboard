# /bin/bash

docker exec -i dashboard_mongo-cms_1 sh -c 'mongorestore --archive --drop' < db.dump