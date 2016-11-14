
module.exports = {

	intro: function(options){

	},

	sendMessage: function(options, done){
		Message.create({message: options.message}).exec(function(err, message){
			if(err) return res.done(err);
			return done();
		});
	},


	pullSong: function(options){
		Song.find({mood: options.newMood}).exec(function(err, songs){
			if(err) return err;
			return songs[options.intensity % songs.length];
		});
	}
};