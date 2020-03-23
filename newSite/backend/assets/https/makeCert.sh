#!/bin/bash

#https://www.alexanderzeitler.com/articles/Fixing-Chrom-missing_subjectAltName-selfsigned-cert-openssl/

DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

openssl genrsa -des3 -out ${DIR}/rootCA.key 2048
openssl req -x509 -new -nodes -key ${DIR}/rootCA.key -sha256 -days 1024 -out ${DIR}/rootCA.pem

sudo openssl req -new -sha256 -nodes -out ${DIR}/server.csr -newkey rsa:2048 -keyout ${DIR}/server.key -config <( cat ${DIR}/server.csr.cnf )
sudo openssl x509 -req -in ${DIR}/server.csr -CA ${DIR}/rootCA.pem -CAkey ${DIR}/rootCA.key -CAcreateserial -out ${DIR}/server.crt -days 500 -sha256 -extfile ${DIR}/v3.ext
