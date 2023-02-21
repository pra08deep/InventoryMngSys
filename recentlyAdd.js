var express= require('express');
var router=express.Router();
var db=require('./databasedata');

router.get('/list',function(req,res,next){
    var sql='SELECT * FROM listofqtyreport';
    db.query(sql,function(err,date,fields){
        if(err) throw err;
        res.render('/list',{title:''})
    })
})