var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
  var url = req.url;
  console.log(url);
  res.render('index', {
    title: 'mock restapi index'
  });
});

router.get('/:path', function(req, res, next) {
  var url = req.url;
  var base = req.baseUrl;
  console.log(base+url);
  var pathStr = req.params.path + "_get.json";
  if(base){
      pathStr=base+"/"+pathStr;
  }
  pathStr = path.join(__dirname, '/../mockdatas/' + pathStr);
  console.log(pathStr);
  
  console.log("read from file1.");
  fs.readFile(pathStr, function read(err, data) {
    if (err) {
      console.log(err);
      data='{"success":"cannot read file."}';
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(data);
    res.end();
  });
});

router.post('/:path', function(req, res, next) {
  var url = req.url;
  var base = req.baseUrl;
  console.log(base+url);
  var pathStr = req.params.path + "_post.json";
  if(base){
      pathStr=base+"/"+pathStr;
  }
  pathStr = path.join(__dirname, '/../mockdatas/' + pathStr);
  console.log(pathStr);
  fs.readFile(pathStr, function read(err, data) {
    if (err) {
      console.log(err);
      data='{"success":"cannot read file."}';
    }
    res.setHeader("Content-Type", "application/json");
    res.send(data);
    console.log(data);
  });
});

router.put('/:path', function(req, res, next) {
  var url = req.url;
  var base = req.baseUrl;
  console.log(base+url);
  var pathStr = req.params.path + "_put.json";
  if(base){
      pathStr=base+"/"+pathStr;
  }
  pathStr = path.join(__dirname, '/../mockdatas/' + pathStr);
  console.log(pathStr);
  fs.readFile(pathStr, function read(err, data) {
    if (err) {
      console.log(err);
      data='{"success":"cannot read file:'+pathStr+'"}';
    }
    res.setHeader("Content-Type", "application/json");
    res.send(data);
    console.log(data);
  });
});

router.delete('/:path', function(req, res, next) {
 var url = req.url;
 var base = req.baseUrl;
 console.log(base + url);
 var pathStr = req.params.path + "_delete.json";
 if (base) {
     pathStr = base + "/" + pathStr;
 }
  pathStr = path.join(__dirname, '/../mockdatas/' + pathStr);
  console.log(pathStr);
  fs.readFile(pathStr, function read(err, data) {
    if (err) {
      console.log(err);
      data='{"success":"cannot read file."}';
    }
    res.setHeader("Content-Type", "application/json");
    res.send(data);
    console.log(data);
  });
});

router.patch('/:path', function(req, res, next) {
  var url = req.url;
  var base = req.baseUrl;
  console.log(base+url);
  var pathStr = req.params.path + "_patch.json";
  if(base){
      pathStr=base+"/"+pathStr;
  }
  pathStr = path.join(__dirname, '/../mockdatas/' + pathStr);
  console.log(pathStr);
  fs.readFile(pathStr, function read(err, data) {
    if (err) {
      console.log(err);
      data='{"success":"cannot read file."}';
    }
    res.setHeader("Content-Type", "application/json");
    res.send(data);
    console.log(data);
  });
});


module.exports = router;
