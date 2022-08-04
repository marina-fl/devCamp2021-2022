const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const config = require('../services/config');



const id = config.googleID;
const secret = config.googleSecret;

passport.use(new GoogleStrategy({
    clientID: id,
    clientSecret: secret,
    callbackURL: "https://localhost:1234/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
