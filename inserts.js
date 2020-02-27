const knex = require('./db/client')

knex.insert({
    title: 'first post',
    content: 'this is my first post im so happy.. :)'
}).into("posts") // this whole thing and almost 

.then((recordCount)=>{
    console.log(recordCount);
    knex.destroy();
})

.catch((e)=>{
console.log(e);   // catching a error 
knex.destroy();
})