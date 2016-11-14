/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var imagesnap = require('imagesnap');
var fs = require('fs');
var NodeWebcam = require( "node-webcam" );
var cv = require('opencv');

module.exports = {
	
	index: function(req, res){
		return res.view('index');
	},
	capture: function(req, res){
		var opts = {
 
		    width: 1280,
		 
		    height: 720,
		 
		    delay: 0,
		 
		    quality: 100,
		 
		    output: "png",
		 
		    verbose: true
		 
		}
		 
		var Webcam = NodeWebcam.create( opts );
		 
		 
		//Will automatically append location output type 
		 
		Webcam.capture( "test_picture" );
		
		cv.readImage("test_picture.png", function(err, im){
		  /*
		  im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
		    for (var i=0;i<faces.length; i++){
		      var x = faces[i];
		      //im.convertGrayscale();
			  //im.canny(5, 300);
			  //im.houghCircles();
			  var circles = im.houghCircles(1.2, 100);
			  console.log(circles[0][0]);
		      //im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);
		      //im.line([line.x + x.width / 4, x.y + x.height * 2 / 5], [x.x + x.width * 3 / 4, x.y + x.height * 2 / 5]);
		      //im.line([circles[0][0] + circles[0][2], circles[0][1] + circles[0][2]], [circles[1][0] + circles[1][2], circles[1][1] + circles[1][2]]);
		    }
		    im.save('./out.jpg');
		  });
		  */
		  im.convertGrayscale();
		  var circles = im.houghCircles();
		  console.log(circles[0][0]);
		  im.save('./out.jpg');
		});
		/*
		cv.readImage("test_picture", function(err, mat){
			console.log(mat.length);
			for(i = 0; i < mat.length; i++){
				console.log(mat.row(i));
			}
		});
		*/
		return res.redirect('/');
	}

};

