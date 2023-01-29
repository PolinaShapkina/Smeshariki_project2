var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var heroes = mongoose.model('heroes', { name: String })

var hero = new heroes({ name: 'Крош' })
hero.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Hey')
    }
})