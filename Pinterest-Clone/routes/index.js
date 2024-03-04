var express = require('express');
var router = express.Router();
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const userModel = require('./users');
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('top');
});

router.get('/findusers', async (req, res) => {
  const allusers = await userModel.find();
  res.send(allusers);
});

passport.use(new localStrategy (
  async function (username, password, done){
    const user = await userModel.findOne({ username : username });
    
    if(!user){
      return done(null,false, {message : 'username not found check again'});
      // return res.status(400).json({message : 'Username not found '});

    }
    else{
      try {
        if (await bcrypt.compare(password, user.password)) {
          return done(null, user, {message : 'userfound'});

        }
        else{
          return done(null,false, {message : 'wrong password'});
        }
      }
      catch(error){
        return done (error);
      }      
    }
  }
));

// passport.serializeUser((user,done) => {
//   done(null,user.id);
// });

// passport.deserializeUser((id,done) => {
//   try{
//     const user = userModel.findById(id);
//     done (null, user);
//   }
//   catch(error){
//     done(error);
//   }
// });

router.get('/profile', async (req,res) => {
  res.send('hello from profile');
});

router.post('/failed', async (req,res) =>{
  res.send('login failed');
});


router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;    
  const lowerCaseUsername = username.toLowerCase();
  let checkExistingUser = await userModel.findOne({ username : lowerCaseUsername});
  const lowerCaseEmail = email.toLowerCase();
  let checkExistingEmail = await userModel.findOne({ email : lowerCaseEmail});
  
  if(checkExistingUser){
    return res.status(400).json({message : 'Username Already exists '});
  }
  else if (checkExistingEmail){
    res.status(401).json({ message : 'Email already exists'});
  }
  else{
    try{
      const hashedPassword = await bcrypt.hash(password,10);
      const newUser = await new userModel ({
        username: lowerCaseUsername,
        email: lowerCaseEmail,
        password: hashedPassword
      });
      await newUser.save();
      // res.send({ newUser, message : 'Account created'});
      // res.redirect('/profile');
      res.status(201).json({ message : 'Account Created'});


      // 
    }
    catch(error){
      res.send({error, message : 'try again'});
    }
  }
});

// router.post('/', passport.authenticate('local', {
//   successRedirect : '/profile',
//   failureRedirect : '/failed'
// }));

router.post('/logins', async (req, res) => {
  const { username , password} = req.body;  
  const user = await userModel.findOne({ username : username});
  if(!user){
    return res.status(400).json({ message : 'user not found'});
  }
  else{
    // why the fuck this exception handling have to tag along with every single piece of code
    try {
      if (await bcrypt.compare(password, user.password)) {
        // passport.isAuthenticated = true;
        passport.serializeUser((user,done) => {
          done(null,user.id);
        });
        
        passport.deserializeUser((id,done) => {
          // Oh just fucking kill me !!!!!!!!
          try{
            const user = userModel.findById(id);
            done (null, user);
          }
          catch(error){
            done(error);
          }
        });
        return res.status(201).json({ message : 'user found'});
      }
      else{
        return res.status(401).json({ message : 'wrong password'});
      }
    }
    catch(error){
      return error;
    }      
  }  
});

// router.post('/', (req, res ) => {
  
// passport.use(new localStrategy (
//   async function (username, password, done){
//     const user = await userModel.findOne({ username : username });
    
//     if(!user){
//       // return done(null,false, {message : 'username not found check again'});
//       return res.status(400).json({message : 'Username not found '});

//     }
//     else{
//       try {
//         if (await bcrypt.compare(password, user.password)) {
//           return done(null, user, {message : 'userfound'});

//         }
//         else{
//           return done(null,false, {message : 'wrong password'});
//         }
//       }
//       catch(error){
//         return done (error);
//       }      
//     }
//   }
// ));

// });


// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) {
//       return res.status(500).json({ message: 'Internal Server Error' });
//     }
//     if (!user) {
//       return res.status(400).json({ message: 'Username or password is incorrect' });
//     }
//     req.logIn(user, function(err) {
//       if (err) {
//         return res.status(500).json({ message: 'Error logging in' });
//       }
//       return res.status(200).json({ message: 'Successfully logged in' });
//     });
//   })(req, res, next);
// });

module.exports = router;
