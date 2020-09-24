FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
ENV PATH=/opt/rh/rh-nodejs10/root/usr/bin/:${PATH}

RUN <install> git
RUN git config --global http.sslVerify false

COPY package.json /usr/src/app
RUN . /opt/rh/rh-nodejs10/enable && npm config set -g registry http://registry.npmjs.org && npm install --verbose

EXPOSE 3500

COPY . /usr/src/app
CMD npm run start -- 3500 0.0.0.0