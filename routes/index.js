var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'GHSCL Management',
    heading: 'GHSCL Manager'
  });
});

router.post('/', (req, res, next) => {
  if (req.body = {}){
    console.log("Body is empty!");
  }
  else{
    console.log("Boyd is NOT empty!");
    console.log("Body: " + JSON.stringify(req.body));
  }
});

router.get('/home', (req, res, next) => {
  console.log("Got Home!");
});

router.post('/admin', (req, res, next) => {
  try{
    res.render('admin', {title: 'Admin', layout: 'adminLayout.hbs'});
  }
  catch (err) {
    console.log("Problem fetching Admin: ", err);
  }
});

module.exports = router;
