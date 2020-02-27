const knex = require('./db/client')

knex('posts').where({id:1}).update({
      title: "apple"
  }).returning('*')
  .then(changeCount =>{
      console.log(changeCount);
      knex.destroy();
})
.catch(e =>{
    console.log(e);
    knex.destroy();
})