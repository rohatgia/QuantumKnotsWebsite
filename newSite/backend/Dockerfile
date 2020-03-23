FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PATH=/opt/rh/rh-nodejs12/root/usr/bin/:${PATH}

RUN yum install -y git
RUN git config --global http.sslVerify false

COPY package.json /usr/src/app

RUN . /opt/rh/rh-nodejs12/enable && npm config set -g registry http://registry.npmjs.org/ && npm install --verbose

EXPOSE 3501

COPY . /usr/src/app

CMD npm run start -- 3501 0.0.0.0
