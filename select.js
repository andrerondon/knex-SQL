const knex = require('./db/client')

knex.select().from('posts').where({id:1})
    .then(posts => {
        console.log(posts);
        knex.destroy();
    })
    .catch(e =>{
        console.log(e);
        knex.destroy();
    })