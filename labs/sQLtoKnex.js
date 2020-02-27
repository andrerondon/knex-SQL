const knex = require('../db/client')

// Write KnexJS that turns into the following SQL statements:

// 1) SELECT * FROM users WHERE id = '1';
// 2) SELECT * FROM users LIMIT 5 OFFSET 10;
// 3) INSERT INTO posts ('title') VALUES ('🤔');
// 4) insert into `posts` (`content`, `title`) values ('🍎', '🍌'), ('✏️', '📄'), ('🖱, '⌨️');

knex.select('*').from('posts').limit(5).offset(10)
.returning("*")
.then(changeCount =>{
  console.log(changeCount);
  knex.destroy();
})
.catch(e =>{
console.log(e);
knex.destroy();
})



knex('posts').where({id:1})
.returning('*')
.then(changeCount =>{
    console.log(changeCount);
    knex.destroy();
})
.catch(e =>{
  console.log(e);
  knex.destroy();
})





