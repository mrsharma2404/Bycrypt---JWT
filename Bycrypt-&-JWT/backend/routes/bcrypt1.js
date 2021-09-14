var express = require('express');
var router = express.Router();
var pool=require('./pool');
var jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const saltRounds = 10;

var refreshtokens = [ ];

/* GET home page. */
router.post('/signup', function(req, res, next) {
   pool.query("select * from userdetail where email=? ", [req.body.email],function (error, result) {
      //this query is to check duplicate entry for email
      if(error)
      {
        res.status(500).json({result:false, msg:'Server Error'})
      }
      else
      {
         if(result.length!=0)
         {
            res.status(200).json({result:false, msg:'User Email Already Exits'})
         }
         else
         {
            bcrypt.genSalt(saltRounds, function(err, salt) {
               bcrypt.hash( req.body.password, salt, function(err, hash) {
                  pool.query("insert into userdetail (name, email, mobile, password, username, address) values(?,?,?,?,?,?)",[req.body.name, req.body.email, req.body.mobile, hash, req.body.username, req.body.address ],function(err,result){
                     if(err)
                     {
                        if(err.code=='ER_DUP_ENTRY' )
                        {
                           res.status(200).json({result:false, msg:'Username Already Exists'})
                        }
                        else
                        {
                           res.status(500).json({result:false, msg:'Server Error'})
                        }
                        
                        //we can also maintain duplicate entry from here by error message
                        //i made userName as unique key in database
                        //we can send our msg by this sqlerror or we can fetch data to check duplicate entry 
                        //that i did in starting of this function
                        //console.log(err)
                     }
                     else
                     {
                        res.status(200).json({result:true, msg:''})
                     }
                    })
               });
           });   
         }
      }
      
     });
});


router.post('/signin', function(req, res, next){
  pool.query("select * from userdetail where email=? ", [req.body.email],function (error, result) {
    if(error)
    {
      console.log(err)
      res.status(500).json({result:false})
     
    }
    else
    {  
       //console.log( result[0].password, req.body.password)
      bcrypt.compare(req.body.password,  result[0].password, function(err, ress) {
         if(err)
         {
            console.log("bcrypt error " , err)
         }
         else
         {
            if(ress==true)
            {
               res.status(200).json({result:true})
            }
            else
            {
               res.status(200).json({result:false})
            }
         }
     });
    }
   });
});

//function auth(req, res, next)
//{
//   jwt.verify(req.headers.authorization,'thebbtclubthebbtclubthebbtclub11' , (err, user)=>{
//      if(!err)
//      {
//         req.user = user;
//         next();
//      }
//      else{
//         return res.status(403).json({msg:"user not authenticated"})
//      }
//   });
//}
//
//router.post('/protected',  auth ,(req, res, next)=>{
//   console.log("inside protected")
//})

router.post('/renewtoken' ,(req, res, next)=>{
   const refreshtoken = req.body.token;
   console.log(refreshtoken)
   if(!refreshtoken){
      return res.status(403).json({msg:"user not authenticated"})
   }
   else{
      jwt.verify(refreshtoken,'thebbtclubthebbtclubthebbtclub22' , (err, user)=>{
         if(!err)
         {
            var token = jwt.sign({id:100}, 'thebbtclubthebbtclubthebbtclub11', {expiresIn:'20s'})
            return res.status(200).json({access_token:token })
         }
         else{
            return res.status(403).json({msg:"user not authenticated"})
         }
      });
   }
})


//for token
router.post('/gettoken', function(req, res, next){
   try{
       var token1 = jwt.sign({id:100}, 'thebbtclubthebbtclubthebbtclub11', {expiresIn:'20s'})
       var token2 = jwt.sign({id:100}, 'thebbtclubthebbtclubthebbtclub22', {expiresIn:'100s'})
       //refreshtokens.push(token2)
       //console.log(token)
       //localstorage.setItem('token',token)
       res.status(200).json({access_token:token1 , refresh_token:token2})
   }
   catch(e){
       //console.log('get token error' , e)
       res.status(500).json({access_token:null})
   }
})


//check token

router.post("/refresh", function(req,res){
   try{
      var token = jwt.verify(req.headers.authorization,'thebbtclubthebbtclubthebbtclub11');
      pool.query( "select * from datatable ",  function(error, result){
         if(error)
         {res.status(500).json([])
         console.log(error)}
         else
         {res.status(200).json(result)}
   })
   }
   catch(e)
   {
      console.log(e)
      res.status(200).json("expire")
   }
})
module.exports = router;