/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//var queue = require("queue");
var util = require("util");
//var q = queue();
var oxfordEmotion = require('node-oxford-emotion')('5577c77e6a38480aaf3ce6d034de65a1');
var fs = require('fs');
var NodeWebCam = require('node-webcam');
var opts = {
 
		    width: 1280,
		 
		    height: 720,
		 
		    delay: 0,
		 
		    quality: 100,
		 
		    output: "png",
		 
		    verbose: true
		 
		};
		 
var Webcam = NodeWebCam.create( opts );
		 
var mood;
var emot;		 
		//Will automatically append location output type 

Webcam.capture("./assets/images/picture");

module.exports = {

	index: function(req, res){

		/*
		function getHighestMood(moods){
			moods = JSON.parse(moods);
			var mood;
			var heightest = 0;
			for(i = 0; i < moods.scores.length; i++){
				if(moods.scores[i].value > heightest){
					heighest = moods.scores[i].value;
					mood = moods.scores[i];
				}
			}
			return mood;
		}



		//var results = [];
*/
		(function loop(){
			fs.readFile("./assets/images/picture.png", function(err, bitmap){
				if(err) console.log(err);
				if(!bitmap) return;
				console.log("reading");
				var emotion = oxfordEmotion.recognize("image", new Buffer(bitmap.toString('binary'), 'binary'), function(err, cb){
					console.log(cb);
					console.log(err);
					/*
					q.push(function(cb){
						if(getHighestMood(JSON.parse(emotion)) != mood) results.push(getHighestMood(JSON.parse(emotion)));
						cb();
					});
					q.push(AIService.pullSong(getHighestMood(JSON.parse(emotion))), function(cb){

					});
					*/	
				});
				console.log(emotion);
				
			});

			
			/*
			fs.exists("assets/images/picture.png", function(file){

				if(file){
					fs.readFile("assets/images/picture.png", function(bitmap){
						console.log("reading");
						console.log(bitmap);
						oxfordEmotion.recognize("image", new Buffer(bitmap.toString('binary'), 'binary'), function(emotion){
							console.log(emotion);
							return res.ok();
						});
					});
				}
			});
			*/
			
			//var song = q.pop();

			Webcam.capture("./assets/images/picture");

			
			setTimeout(function () {
			    process.nextTick(function () {
			       loop();
			    });
			}, 5000);

		})();
		/*
		var bitmap;
		if(fs.exists("C\\Users\\Paul\\Desktop\\CalHacks3\\Mood\\picture.png")){
			bitmap = fs.readFileSync("C\\Users\\Paul\\Desktop\\CalHacks3\\Mood\\picture.png");
			console.log("Read");
		}
		
		/*
		if(bitmap){
			oxfordEmotion.recognize("image", new Buffer(bitmap.toString('binary'), 'binary'), function(emotion){
				console.log(emotion);
				return res.ok();
			});
		}
		
		*/
		return res.ok();
		/*
    	//var buffer =  new Buffer(bitmap.toString('binary'),'binary');
		
		//var emotion = oxfordEmotion.recognize("image", buffer);
		//console.log(emotion);
		//return res.ok();
	*/	
	},
	
	getFile: function(req, res){
		var filePath = '/Users/Paul/Desktop/CalHacks3/Mood/assets/music/sogone.mp3';
	    fs.stat(filePath, function(cb){
	    	res.writeHead(200, {
	        'Content-Type': 'audio/mpeg',
	        'Content-Length': stat.size,
	        'Content-Disposition': 'attachment'
	    	});
	        var readStream = fs.createReadStream(filePath);
	    	// We replaced all the event handlers with a simple call to util.pump()
	    	readStream.pipe(res);
	    });
	    
	},
	play: function(req, res){
		var player = require('play-sound')(opts = {})
		player.play('/assets/music.sogone.mp3', function(err){
		  if (err) throw err
		});
		return res.ok();
	},
	getMood: function(req, res){
		
		fs.readFile("./assets/images/picture.png", function(err, bitmap){
				if(err) console.log(err);
				if(!bitmap) return;
				oxfordEmotion.recognize("image", new Buffer(bitmap.toString('binary'), 'binary'), function(emotion){
					console.log(emotion);
					return emotion;
				});
		});
		Webcam.capture("assets/images/picture");
		return res.ok();
	}
	
	
};

