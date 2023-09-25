const passport = require('passport');

const Admin = require('../model/admin');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'useSomething';


passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
        let user = Admin.findOne({id: jwt_payload.sub})
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        
    } catch (error) {
        console.log(error);
        
    }
}));

module.exports = passport;