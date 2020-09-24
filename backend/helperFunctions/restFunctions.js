const http = require('http');
const http2 = require('http2');

//HTTP1 Compliant, not HTTP2
exports.getUpdates = function({url},callback){
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

exports.posting = function({url},file,callback){
    let req = http.request(url, {method: 'POST'}, res => {
        let data = [];
        res.on('data', (chunk) => data.push(chunk));
        res.on('end', () => {
            return callback(Buffer.concat(data));
        });
    });
    req.on('error', (err) => {
        console.log(JSON.stringify(err));
    });
    req.write(JSON.stringify(file));
    req.end();
}

exports.deletion = function({url},callback){
    let req = http.request(url, {method: 'DELETE'}, res => {
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

exports.getUpdatesH2 = function({url,path},callback){
    const client = http2.connect(url);
    const req = client.request({
        [http2.constants.HTTP2_HEADER_SCHEME]: "https",
        [http2.constants.HTTP2_HEADER_METHOD]: http2.constants.HTTP2_METHOD_GET,
        [http2.constants.HTTP2_HEADER_PATH]: `/${path}`,
        "Content-Type":"aplication/json"
    });

    req.setEncoding('utf8');
    let data = [];
    req.on('data', (chunk) => {
        data.push(chunk);
    });
    req.end();
    req.on('end', () => {
        return callback(Buffer.concat(data));
    })
}

exports.postingH2 = function({url,path,body},callback){
    const client = http2.connect(url);
    const buffer = new Buffer(JSON.stringify(body));
    const req = client.request({
        [http2.constants.HTTP2_HEADER_SCHEME]: "https",
        [http2.constants.HTTP2_HEADER_METHOD]: http2.constants.HTTP2_METHOD_POST,
        [http2.constants.HTTP2_HEADER_PATH]: `/${path}`,
        "Content-Type":"aplication/json",
        "Content-Length":buffer.length
    });

    req.setEncoding('utf8');
    let data = [];
    req.on('data', (chunk) => {
        data.push(chunk);
    });
    req.write(buffer);
    req.end();
    req.on('end', () => {
        return callback(Buffer.concat(data));
    })
}