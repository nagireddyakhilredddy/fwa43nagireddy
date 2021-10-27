var express = require('express');
var router = express.Router();
var value=Math.round(Math.random()*100);

var s= Math.log2(value)  ;
var t=Math.cosh(value) 
var h=Math.floor(value)
 
//var g= Math.cosh(value) ;
/* GET home page. */
router.get('/', function(req, res, next) {

 // res.send(`[ Math.log2() ] applied to [${value}] is [${s}][Math.cosh() ] applied to [${value}] is [${g}]`);
 res.send('the function [Math.log2() applied to] ['+ value+'] is ['+s+']\nthe function [Math.cosh() applied to] ['+ value+'] is ['+t+']\nthe function [Math.log2() applied to] ['+ value+'] is ['+h+']');

});

module.exports = router;