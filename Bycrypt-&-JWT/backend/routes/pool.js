var mysql=require("mysql")
var pool=mysql.createPool(
    { host:'localhost',
    port:3306,
    user:'root',
    password:'mysql',
    database:'security',
    connectionLimit:100,
    multipleStatements:true})
    module.exports=pool