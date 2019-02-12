var express = require('express');
var router = express.Router();
var user = require('../db/user');

module.exports = function (passport) {
  router.post('/signup', function(req, res) {
    var body = req.body, 
      username = body.username,
      password = body.password;
    user.findOne({username:username}, function(err,doc){
      if(err) {
        res.status(500).send('error occured')
      }
        else {
          if(doc) {
            res.status(500).send('Username already exists');
          }
          else {
            var record = new user();
            record.username = username;
            record.password = record.hashPassword(password);
            record.save(function(err, user) {
              if(err) {
                res.status(500).send('db error');
              } else {
                res.send(user);
              }
            })
          }
        }
      }
    );
  });
  return router;
};
