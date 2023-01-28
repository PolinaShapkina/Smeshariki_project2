var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Кроша */
router.get('/krosh', function(req, res, next) {
  res.render('hero', {
    title: "Крош",
    picture: "images/krosh.jpg",
    desc: "Крош — весёлый неунывающий кролик. Любит активно проводить время и совершать полезные дела. Активно занимается спортом и играет. Никак не может усидеть на месте, постоянно прыгает и что-то делает."
    });
  });
  /* Страница Нюши */
router.get('/nyusha', function(req, res, next) {
  res.render('hero', {
    title: "Нюша",
    picture: "images/nyusha.jpg",
    desc: "Нюша — типичная хрюшка, мечтающая найти принца и считающая себя красавицей. Любит прихорашиваться, внимательно следит за модой. Пытается найти в себе скрытые таланты."
    });
  });
  /* Страница Пина */
  router.get('/pin', function(req, res, next) {
  res.render('hero', {
    title: "Пин",
    picture: "images/pin.jpg",
    desc: "Пин — механик-самоучка; пингвин, разговаривающий с немецким акцентом. Всё время что-то изобретает и мастерит, не задумываясь о последствиях."
    });
  });
  /* Страница Копатыча */
  router.get('/kopatych', function(req, res, next) {
  res.render('hero', {
    title: "Копатыч",
    picture: "images/копатыч.jpg",
    desc: "Копатыч — медведь-огородник, обеспечивающий растительную пищу смешарикам. Любит играть в шахматы и пить чай."
    });
  });
  /* Страница Лосяша */
  router.get('/losyash', function(req, res, next) {
  res.render('hero', {
    title: "Лосяш",
    picture: "images/лосяш.jpg",
    desc: "Лосяш — лось-учёный, мечтающий получить Нобелевскую премию. Изобретателен. Имеет знания во многих науках: астрономии, химии, информатике, психологии и т. д."
    });
  });
  

module.exports = router;

