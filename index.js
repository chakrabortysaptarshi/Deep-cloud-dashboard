var express = require('express');
var app = express();
var server = require('http').Server(app);
var io= require('socket.io')(server);
var path = require('path');
var cpuStat = require('cpu-stat');
var memStat = require('mem-stat');
var si = require('systeminformation');
var _dirname = path.resolve();

//app.use('/', express.static(__dirname + '/'));
app.use('/public', express.static(__dirname + '/public'));

server.listen(3333);

app.get("/", function(req, res) {
	res.sendFile(_dirname+ '/index.html');
});
var i=0;
var accTrn = [];
var accVal = [];
var lossTrn = [];
var lossVal = [];
io.on('connection', function(socket) {
	++i;
	socket.emit('news','hello world');
	socket.on('my other event', function(data) {

	cpuStat.usagePercent({
	    sampleMs: 10000,
	  },
	  function(err, percent, seconds) {
	    if (err) {
	      return console.log(err);
	    }
	    var a = parseFloat(Math.random()).toFixed(2); 
	    accTrn.push(a);
	    a = parseFloat(Math.random()).toFixed(2);
	    accVal.push(a);
	    a = parseFloat(Math.random()).toFixed(2);
	    lossTrn.push(a);
	    a = parseFloat(Math.random()).toFixed(2);
	    lossVal.push(a);

	    var usedPercent = Math.round(memStat.usedPercent());
		var message = '{"kpi" : '+(90+a*10)+ ', "sec_ep" : '+(11.5+a*10)+ ', "batch" : '+ Math.round(a*380)+ ', "sam_s" : '+ a*2000 +', "CPU" : '+ Math.round(percent) + ', "RAM": ' + usedPercent+', "acTr": ['+ accTrn+'], "acVal": ['+ accVal+'], "lsTr": ['+ lossTrn+'], "lsVal": ['+ lossVal+']}'; 
		console.log(message);
	    socket.emit('news',  JSON.parse(message));

	    console.log(usedPercent);
	    //the percentage cpu usage for core 0
	    console.log(Math.round(percent));i

	});
	});
}); 
