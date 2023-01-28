var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Кроша */
router.get('/krosh', function(req, res, next) {
  res.send("<h1>Страница Кроша</h1>")
  });
  /* Страница Нюши */
router.get('/nyusha', function(req, res, next) {
  res.send("<h1>Страница Нюши</h1>")
  });
  /* Страница Пина */
  router.get('/pin', function(req, res, next) {
  res.send("<h1>Страница Пина</h1>")
  });
  /* Страница Копатыча */
  router.get('/kopatych', function(req, res, next) {
  res.send("<h1>Страница Копатыча</h1>")
  });
  /* Страница Лосяша */
  router.get('/losyash', function(req, res, next) {
  res.send("<h1>Страница Лосяша</h1>")
  });
  

module.exports = router;

