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
	fastify.addHokk('onSend', (request, reply, payload, next) => {
		reply.header("Access-Controle-Allow-Origin", "*");
		reply.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
		next()
	});
	*/


