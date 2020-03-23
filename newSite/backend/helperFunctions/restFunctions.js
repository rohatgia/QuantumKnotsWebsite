const http = require('http');
const http2 = require('http2');

exports.get = function({url},callback){
	let req = http.request(url, {method: 'GET'}, res => {
		let data = [];
		res.on('data', (chunk) => data.push(chunk));
		res.on('end', () => {
			return callback(Buffer.concat(data));
		});
	});
	req.on('error', (err) => {
		console.log(JSON.stringify(err));
	});
	req.end();
}
