var pageController = require('../controllers/page');


module.exports = function(app){
  app.get('/page', pageController.getPage);

  app.post('/page', pageController.postPage);
};