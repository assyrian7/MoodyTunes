/**
 * Song.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	link:{
  		type: 'string',
  		unique: 'string',
  		required: 'true'
  	},
  	mood:{
  		type: 'string',
  		required: 'true'
  	},
  	name:{
  		type:'string',
  		required: 'true'
  	},
  }
};

