// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');

// CONFIG //
var config = require('./config');

// EXPRESS //
var app = module.exports = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({limit: '50mb'}));

// MASSIVE //
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
    connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

var dbSetup = require('./services/dbSetup');
dbSetup.run();

// CONTROLLERS //
var UserCtrl = require('./controllers/userCtrl');
var userProfileCtrl = require('./controllers/user-profile-controller');
var homeViewsCtrl = require('./controllers/home-views-controller');

// SERVICES //
var passport = require('./services/passport');

// POLICIES //
var isAuthed = function(req, res, next) {
    if (!req.isAuthenticated()) return res.status(401)
        .send();
    return next();
};

// Session and passport //
app.use(session({
    secret: config.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport Endpoints //
app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/api/me'
}));
app.get('/api/logout', function(req, res, next) {
    req.logout();
    return res.status(200)
        .send('logged out');
});

// User Endpoints //
app.post('/api/register', UserCtrl.register);
// app.get('/api/user', UserCtrl.read);
app.get('/api/me', UserCtrl.me);
app.put('/api/user/current', isAuthed, UserCtrl.update);

//Endpoints to add to database
app.post('/profile/addAdventure', userProfileCtrl.addAdventure);
app.post('/profile/addArticle', userProfileCtrl.addArticle);
app.post('/profile/addJob', userProfileCtrl.addJob);
app.post('/profile/addKit', userProfileCtrl.addKit);
app.post('/profile/addAdventure/addPics', userProfileCtrl.addAdventurePics);
app.post('/profile/addArticle/addPics', userProfileCtrl.addJournalPics);
app.post('/addAdventureLocation', userProfileCtrl.addAdvLoc);


//home view endpoints
app.get('/home/getAdventures', homeViewsCtrl.getAdventures);
app.get('/home/journal', homeViewsCtrl.getJournal);
app.get('/adventures/getAdventurePics', homeViewsCtrl.getAdventurePics);
app.get('/adventures/getLocations', homeViewsCtrl.getLocations);


// CONNECTIONS //
app.listen(3051, function() {
    console.log('Listening on port thirty fifty one...');
});

// var express = require('express');
// var app = module.exports = express();
// var bodyParser = require('body-parser');
//     app.use(bodyParser.json());
// var massive = require('massive');
// var connectionString = "postgres://postgres:Maklumat@localhost/Personal";
// var massiveInstance = massive.connectSync({connectionString : connectionString});
//     app.set('db', massiveInstance);
// var db = app.get('db');
// var productController = require('./product-controller');
// var session = require('express-session');
// var cors = require('cors');
// var config = require('./config');
// var users = require('./userCtrl');
//
// var corsOption = {
//     origin: 'http://localhost: 4030'
// };
//
//     app.use(cors(corsOption));
//     app.use(session({
//         secret: config.sessionSecret,
//         resave: true,
//         saveUninitialized: true
//     }));
//
//
//     app.post('/login', users.userLogin);
//
//
// app.use(express.static('./public'));
//
// var port = config.PORT;
// app.listen(port, function(){
//     console.log('Listening on port' + port)
// });