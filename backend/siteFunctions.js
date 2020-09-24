'use strict'

var localFunctions = require('./localFunctions');

exports.getEvents = async(req, reply) => {
    //var fromReq = req.params.parameter;
    reply.send();
    //reply.sse();
}

//fastify-sse-v2
//https://github.com/fastify/fastify/issues/1877
//https://github.com/nodefactoryio/fastify-sse-v2
//https://github.com/NodeFactoryIo/fastify-sse-v2/issues/14