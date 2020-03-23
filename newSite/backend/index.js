'use strict';

var siteFunctions= require('./siteFunctions');

const fs = require('fs');
const path = require('path');

asyn function routes(fastify, options){

	fastify.register(require('fastify-cors'),{
		origin: true,
		methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Access-Controle-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin', 'X-Requested-With', 'Cache-Controle'],
		optionSuccessStatus: 200
	});

	/*
	fastify.addHook('onSend', (request, reply, payload, next) => {
		reply.header("Access-Controle-Allow-Origin", "*");
		reply.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
		next()
	});
	*/

	/*
	fastify.addContentTypeParser('*', function (req, done) {
		var data = [];
		req.on('data', chunk => { data.push(chunk) });
		req.on('end', () => {
			done(null, data);
		});
	});
	*/

	fastify.register(require('fastify-multipart'));

	fastify.register(require('fastify-auth'));

	fastify.register(require('fastify-sse'));

	fastify.register(require('fastify-url-data'), (err) => {
		if (err){
			console.log(err);
		};
	});

	//---------------------------------------------------------------
	fastify.route({
		method: 'GET',
		url: '/v1/site/external/:name',
		handler: serverFunctions.getExternal
	});
	//---------------------------------------------------------------
};

module.exports = routes;

module.exports.options = {
	logger: { level: 'trace' },
	http2: true,
	https: {
		allowHTTP1: true,
		key: fs.readFileSync(path.join(__dirname, 'assets/https/server.key')),
		passphrase: 'testSite',
		cert: fs.readFileSync(path.join(__dirname, 'assets/https/server.crt'))
	}
};
