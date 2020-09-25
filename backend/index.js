'use strict';

const fs = require('fs');
const path = require('path');

var siteFunctions = require('./siteFunctions');

async function routes(fastify, options){
    fastify.register(require('fastify-cors'), {
        origin: true,
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin', 'Accept', 'Access-Control-Allowed-Headers', 'Origin', 'X-Requested-With', 'Cache-Control'],
        optionSuccessStatus: 200
    });

    fastify.register(require('fastify-multipart'));
    fastify.register(require('fastify-auth'));
    fastify.register(require("fastify-sse"));
    fastify.register(require("fastify-sse-v2"));

    fastify.register(require('fastify-url-data'), (err) => {
        if (err){
            console.log(err);
        };
    });

    /*
    fastify.register(require('fastify-mongodb'), {
        // force to close the mongodb connection when app stopped
        // the default value is false
        forceClose: true,
        
        url: 'mongodb://mongo/mydb'
    })
    */

    //--------------------------------------------------------
    fastify.route({
        method: 'GET',
        url: '/v1/event-info',
        handler: siteFunctions.getEvents
    });
    //--------------------------------------------------------
};

module.exports = routes;

module.exports.options = {
    logger: { level: 'trace' },
    http2: true,
    https: {
        allowHTTP1: true,
        key: fs.readFileSync(path.join(__dirname, 'assets/https/server.key')),
        passphrase: 'default',
        cert: fs.readFileSync(path.join(__dirname, 'assets/https/server.crt'))
    }
};

 /*
    //Alternate CORS Method
    fastify.addHook('onSend', (request, reply, payload, next) => {
        reply.header("Access-Control-Allow-Origin", "*");
        reply.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
        next()
    });

    //To convert all incoming data as binary
    fastify.addContentTypeParser('*', function (req, done) {
        var data = [];
        req.on('data', chunk => { data.push(chunk) });
        req.on('end', () => {
            done(null, data);
        });
    });
*/