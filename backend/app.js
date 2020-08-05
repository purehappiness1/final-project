require("dotenv").config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");

const session = require('express-session');
const passport = require('passport');
const passportSession = require('passport-session');
const LocalStrategy = require('passport-local').Strategy;
const sha256 = require('sha256');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

mongoose.connect(process.env.CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({ secret: 'some key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// const loginSettings = { successRedirect: '/profile', failureRedirect: '/login' };
// const signupSettings = { successRedirect: '/profile', failureRedirect: '/signup' };

passport.use('signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}, async (req, email, password, done) => {
  console.log(email);
  console.log(password);
  await User.findOne({ email }, async function (err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      console.log('User already exists');
      return done(null, false);
    }
    const newUser = new User();
    newUser.name = req.body.name;
    newUser.password = sha256(password);
    newUser.email = email;
    await newUser.save();
    console.log('User Registration successful');
    return done(null, newUser);
  });
}));

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async function (username, password, done) {
  const passwordHash = sha256(password);
  try {
    const user = await User.findOne({ email: username });
    if (!user) {
      return done(null, false, { message: 'User not found' });
    }
    if (user.password !== passwordHash) {
      return done(null, false, { message: 'Wrong password' });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

function authenticationMiddleware() {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      res.locals.auth = true;
      return next();
    }
    //res.redirect('/home');
  };
}

app.get('/profile/:id', authenticationMiddleware(), async (req, res) => {
//  const currentUser = await User.findById(req.session.passport.user._id).populate('games').lean();
});

app.get('/', authenticationMiddleware(), function(req, res) {
  res.render('index');
});

/* Обработка регистрационных POST-данных */
app.post('/signup', passport.authenticate('signup' /* , signupSettings */));

app.post('/login', passport.authenticate('local'/* , loginSettings */));

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.listen(3100, () => {
  console.log('Server started on 3100');
})
