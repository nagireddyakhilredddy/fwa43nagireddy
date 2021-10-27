var express = require('express');
var router = express.Router();
var value=Math.round(Math.random()*100);

var s=Math.hypot()  ;
var t=Math.ceil()  
var h=Math.clz32()
 

/* GET home page. */
router.get('/', function(req, res, next) {

 // res.send(`[ Math.log2() ] applied to [${value}] is [${s}][Math.cosh() ] applied to [${value}] is [${g}]`);
 res.send('the function [Math.hypot() applied to] ['+ value+'] is ['+s+']\nthe function [Math.ceil() applied to] ['+ value+'] is ['+t+']\nthe function [Math.clz32() applied to] ['+ value+'] is ['+h+']');

});

module.exports = router;