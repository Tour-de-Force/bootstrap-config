# CouchDB Config
This is a collection of several files used to configure necessary settings and permissions for CouchDB in AWS and local development.

## In AWS
The [BTC Infrastructure](https://github.com/Tour-de-Force/btc-infrastructure/) repository contains a copy of these files that it uses to automatically configure a new CouchDB server instance.

**If this repository is updated the copy in [BTC Infrastructure](https://github.com/Tour-de-Force/btc-infrastructure/) also needs to be updated.**

## Locally
Unfortunately, there seems to be no simple way to directly use these files to configure CouchDB. You may try to use [this module](https://github.com/eHealthAfrica/couchdb-configure) like AWS, but it may just be easier to do your configuration manually using the [CouchDB web admin interface](http://docs.couchdb.org/en/1.6.1/intro/futon.html). Simply login as an admin and copy the configuration and design docs.
