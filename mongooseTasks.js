var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.lala = function(){
    console.log(this.get("name") + " сказал привет")
}

var heroes = mongoose.model('heroes', schema)

var hero = new heroes({ name: 'Крош' })
hero.save(function (err) {
    hero.lala()
})