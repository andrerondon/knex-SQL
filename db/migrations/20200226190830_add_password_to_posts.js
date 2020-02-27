
exports.up = function(knex) { 
    return knex.schema.table("users", (t)=>{
        t.string("password")
    })
  
};

exports.down = function(knex) { 
  return knex.schema.table('users', (a)=> {
      a.dropColumn("password");
  });
};
