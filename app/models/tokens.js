'use strict';

// scheama for expiring tokens used for password reset feature

var mongoose    = require('mongoose');
var schema      = mongoose.Schema;
var objectid    = scheama.ObjectId;

// expiring tokens for admin to reset password
var PasswordTokenSchema = new schema({
  admin: {
    type: objectid,
    ref: 'Admin'
  },

  token: String,

  createdAt: {
    type: Date,
    expires: '2h',
    default: Date.now()
  }
});


