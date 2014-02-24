var Page = require('../models/page');


module.exports = {

  getPage: function(req, res){
    Page.findOne({}, function(err, page){
      if(err) console.log(err);
      if(page) res.json(page.settings);
    });
  },

  postPage: function(req, res){
    var stuff = req.body.stuff;
    console.log('server stuff: ', stuff);
    Page.findOneAndUpdate({}, {'settings.stuff': stuff}, function(err, page){
      if(err) console.log(err);
      if(page){
        console.log('page', page);
        res.send(201);
      }
    });
  }
};