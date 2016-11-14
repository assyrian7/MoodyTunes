/**
 * MusicController
 *
 * @description :: Server-side logic for managing Musics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');
var fs = require('fs');
var util = require('util');

module.exports = {
	/*
	photo : function(req, res){
		var options = {
			url: 'https://api.projectoxford.ai/emotion/v1.0/recognize',
			method: 'POST',
			headers: {
				'Content-Type': 'Application/octet-stream',
				'Ocp-Apim-Subscription-Key': 'b24df107cfd84665982964527fa63254'
			},
			body: req.body.data
		};

		request(options, function(err, response, body){
			if(err){ console.log(err); return; }
			var jsonScores = body.scores;

			//parse the data

		});
	},
	*/
	index: function(req, res){
		return res.view("homepage");
	},

	stream: function(req, res){
		var path = '/Users/Paul/Desktop/CalHacks3/MoodyTunes/sogone.mp3';
		
		/*
		var stat = fs.statSync(path);
		console.log(stat);
		res.writeHead(200, {
			'Content-Type': 'audio/mgep',
			'Content-Length': stat.size,
			'Content-Disposition': 'attachment'
		});
		var readStream = fs.createReadStream(path);
		readStream.pipe(res);
		*/
		
		fs.stat(path, function(err, file){
			if(err) console.log(err);
			if(!file) return;
			console.log(file);
			res.writeHead(200, {
				'Content-Type': 'audio/mgep',
				'Content-Length': file.size,
				'Content-Disposition': 'attachment'
			});
			fs.createReadStream(path).pipe(res);
		});
		
	}
};


