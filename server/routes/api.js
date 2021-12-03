const express = require('express');
const router = express.Router();
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
/* GET api listing. */
router.get('/', (req, res) => {
 res.send('api works');
});
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;

var db;
MongoClient.connect('mongodb+srv://test1:testone@cluster0.7qlbd.mongodb.net/testone?retryWrites=true&w=majority', { useNewUrlParser: true ,
useUnifiedTopology: true }, (err, database) => {
 if (err) return console.log(err);
 db = database.db('ITCommerce');
});
router.route('/sendEmail').post(function (req, res) {
  
    const sgMail = require('@sendgrid/mail')
    const api_key="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"
    sgMail.setApiKey(api_key)
    console.log(req.body)
    console.log(req.body.email)
    const msg = {
      to: req.body.email, // Change to your recipient
      from: 'tanyanjun14@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
    });
// insert new quote
router.route('/quotes').post(function (req, res) {
 db.collection('quotes').insertOne(req.body, (err, results) => {
 if (err) return console.log(err);
 console.log('saved to database');
 res.send(results);
 });
});
// insert new product
router.route('/products').post(function (req, res) {
    db.collection('itproduct').insertOne(req.body, (err, results) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.send(results);
    });
   });
   // insert new cart
router.route('/cart').post(function (req, res) {
    db.collection('cart').insertOne(req.body, (err, results) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.send(results);
    });
   });
      // insert new order
router.route('/order').post(function (req, res) {
    db.collection('order').insertOne(req.body, (err, results) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.send(results);
    });
   });
     //get order
     router.route('/order/:_user').get(function(req, res) {
        db.collection('order').find({'user':req.params._user}).toArray( (err, results) => {res.send(results)});
        
    });

   //get new cart 
   router.route('/cart/').get(function(req, res) {
    db.collection('cart').find().toArray( (err, results) => {res.send(results)});
    
});
router.route('/cart/:_user').get(function(req, res) {
    db.collection('cart').find({'user':req.params._user}).toArray( (err, results) => {res.send(results)});
    
});
router.route('/carts/:_id').get(function(req, res) {
    db.collection('cart').findOne({"_id": ObjectId(req.params._id)}, (err, results) => {res.send(results)});
    
});
// delete post based on id
router.route('/cart/:_id').delete(function(req, res) {
    db.collection('cart').deleteOne( {"_id": ObjectId(req.params._id)}, (err,
   results) => {
   res.send(results);
   });
   });
   router.route('/cartDelete/:user').delete(function(req, res) {
       
    db.collection('cart').deleteMany({'user':req.params.user}),(err, results) => {res.send(results)};
   });
   // update post based on id
router.route('/cart/:_id').put(function(req, res) {
    db.collection('cart').updateOne( {"_id": ObjectId(req.params._id)}, {
   $set: req.body }, (err, results) => {
   res.send(results);
   });
   });
// get all posts

router.route('/quotes').get(function(req, res) {
    db.collection('quotes').find().toArray( (err, results) => {res.send(results)});
    
});
// get certain posts
router.route('/quotes/:quotes').get(function(req, res) {
    db.collection('quotes').find({ "quote": '1231' }).toArray( (err, results) => {res.send(results)});
    
});
// get all product

router.route('/products').get(function(req, res) {
    db.collection('itproduct').find().toArray( (err, results) => {res.send(results)});
    
});

// get certain product

router.route('/products/:_id').get(function(req, res) {
    db.collection('itproduct').findOne({"_id": ObjectId(req.params._id)}, (err, results) => {res.send(results);
    });
    });
// delete post based on id
router.route('/products/:_id').delete(function(req, res) {
    db.collection('itproduct').deleteOne( {"_id": ObjectId(req.params._id)}, (err,
   results) => {
   res.send(results);
   });
   });
   // update post based on id
router.route('/products/:_id').put(function(req, res) {
    db.collection('itproduct').updateOne( {"_id": ObjectId(req.params._id)}, {
   $set: req.body }, (err, results) => {
   res.send(results);
   });
   });

   router.route('/userRegist/:username').get(function(req, res) {
    db.collection('users').findOne({"name": req.params.username}, (err, results) => {res.send(results);
    });
    });

   router.route('/authuser').post(function(req, res2) {
    var username = req.body.username.toUpperCase();
     var password = req.body.password;
     db.collection('users').findOne({"name": username}, { password: 1, role: 1,
        email:1,_id: 0 }, function(err, result) {
        if (result == null) res2.send([{"auth": false}]);
        else{
        bcrypt.compare(password, result.password, function(err, res) {
        if(err || res == false) {
         res2.send([{"auth": false}]);
        } else {
         res2.send([{"auth": true, "role": result.role,"email":result.email}]);
        }
        });
        }
        });
        });
        router.route('/forgotuser').post(function(req, res) {
            var username = req.body.username.toUpperCase();
             var password = req.body.password;
            


              bcrypt.hash(password, BCRYPT_SALT_ROUNDS, function(err, hash) {
                db.collection('users').updateOne( {"name": username}, {
                    $set:{"password" : hash }}, (err, results) => {
                    res.send(results);
                    console.log('password change')
                    });
        });
            
                });
        router.route('/reguser').post(function(req, res) {
        var username = req.body.username.toUpperCase();
         var password = req.body.password;
        var role = req.body.role;
        var email=req.body.email;
        bcrypt.hash(password, BCRYPT_SALT_ROUNDS, function(err, hash) {
         db.collection('users').insertOne({"name" : username, "password" : hash,
        "role" : role,"email":email }, (err, result) => {
        if (err) return console.log(err)
        console.log('user registered')
        res.send(result);
         });
        });
        })
// // Get all posts
// router.get('/posts', (req, res) => {
//  // Get posts from the mock api
//  // This should ideally be replaced with a service that connects to MongoDB
//  axios.get(`${API}/posts`)
//  .then(posts => {
//  res.status(200).json(posts.data);
//  })
//  .catch(error => {
//  res.status(500).send(error)
//  });
// });
module.exports = router;