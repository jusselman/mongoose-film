var express = require('express');
var router = express.Router();
var filmsCtrl = require('../controllers/films');

/* GET request to /films/new */
router.get('/new', filmsCtrl.new );
router.post('/', filmsCtrl.create);


module.exports = router;
