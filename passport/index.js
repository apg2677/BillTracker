const passport = require("passport");
const User = require("../models/user");
const LocalStrategy = require("./LocalStrategy");


passport.serializeUser((user, done) => {
    console.log(user);
    done(null, { _id: user._id });
})

passport.deserializeUser((id, done) => {
    console.log("Deserialized User called..");

    User.findOne(
        { _id: id },
        "username",
        (err, user) => {
            console.log(user);
            done(null, user)
        }
    )
})

passport.use("local", LocalStrategy);
module.exports = passport;
