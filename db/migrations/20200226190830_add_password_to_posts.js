
exports.up = function(knex) { 
    return knex.schema.table("post", (t)=>{
        t.string("password")
    })
  
};

exports.down = function(knex) { 
  return knex.schema.table('posts', (a)=> {
      a.dropColumn("password");
  });
};
