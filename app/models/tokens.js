

// scheama for expiring tokens used for password reset feature

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var objectid    = Schema.ObjectId;

// expiring tokens for admin to reset password
var PasswordTokenSchema = new Schema({
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


