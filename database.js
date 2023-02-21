
const 
   {createConnection} 
= require ('mysql');

const pool= createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"metromarketinventory",
    conectionLimit:10
})

pool.connect(function(err){
    if(err)throw err;
    console.log('Database is connection sucess');
});
module.export=pool;