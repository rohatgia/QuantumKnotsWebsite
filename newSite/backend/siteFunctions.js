'use strict';

var localFunctions = require('./localFunctions');

exports.getExternal = async(req, reply) => {
	var name = req.params.name;
	localfuntions.get({url:``},function(data){
		reply.send(data);
	})
}
