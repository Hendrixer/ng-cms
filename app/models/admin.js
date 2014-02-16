'use strict';

var Q         = require('q');
var mailer    = require('nodeMailer');
var mongoose  = require('mogoose');
var schema    = mongoose.Schema;
var objectid  = schema.ObjectId;

// scheama for admins, subjec to change once I realize wtf an admin needs n stuff
var AdminSchema = new schema({
  name: String,

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
});

// Setup some static methods and instance methods for easy querying

AdminSchema.statics.findByEmail = function(email){
  var check = false;
  typeof email === 'string' ? check = true : throw Error('email is not a string');

  var Admin = mongoose.model('Admin');
  var search = {'email': email};
  var defer = Q.defer();

  if(check) {
    Admin.findOne(search, function(err, admin){
      if(err) defer.reject(err);
      if(!admin) defer.reject('no admin with: ', email);

      if(admin) defer.resolve(admin);
    });
  }
  return defer.promise;
};