
exports.up = function(knex) { // use to change the database 
    return knex.schema.createTable("posts", (table)=>{
        table.bigIncrements("id") // this creats auto incrmenting u=
        table.string("title"); // this creates a collum called "title" type of string
        table.text("content")
        table.timestamp("createdAt").defaultTo(knex.fn.now());
    })
  
};

exports.down = function(knex) { // used to under the change in database
  return knex.schema.dropTable("posts")
};
