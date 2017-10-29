var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    port     : 3307
});

/* GET home page. */
router.post('/list', function(req, res, next) {
    connection.query('SELECT * FROM baobei.item', function(err, rows, fields) {
        res.header('Access-Control-Allow-Origin','*');
        res.send(rows)//·¢ËÍ
    });
});
router.post('/detail', function(req, res,next) {
    res.header('Access-Control-Allow-Origin','*');
    connection.query("SELECT * FROM baobei.item WHERE id='"+req.body.s+"';", function(err, rows, fields) {
        res.send(rows)//·¢ËÍ
    });
});

module.exports = router;
