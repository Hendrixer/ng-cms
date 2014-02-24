var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;


var PageSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true,
    index: true
  },

  settings: {
    stuff: String
  }

});




module.exports = mongoose.model('Page', PageSchema);
