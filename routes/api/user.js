const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const passport = require("../../passport");
// const userController = require("../controllers/userController");


router.route("/", (req, res) => {
    console.log("User Sign Up");
    
    const { username, password } = req.body
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log("User.js post error: ", err)
        } else if (user) {
            res.json({
                error: "User already exists with username!"
            })
            console.log("222User.js post error: ", err)
        } else { const newUser = new User({
            username: username,
            password: password
        })
        newUser.save((err, savedUser) => {
            if (err)
                return res.json(err)
                res.json(savedUser)
        })
        console.log("3333User.js post error: ", err)
        }
    })
})

router.route("/")
    .post(function (req, res, next) {
        console.log("routes/user.js, login, req.body: ");
        console.log(req.body)
        next()
    },
    passport.authenticate("local", function (error, user, info) {
// this will execute in any case, even if a passport strategy will find an error, and log everything to console
        console.log(error);
        console.log(user);
        console.log(info);
  
        if (error) {
          res.status(401).send(error);
        } else if (!user) {
          res.status(401).send(info);
        } else {
          next();
        }
        res.status(401).send(info);
    }),
        (req, res) => {
            console.log("logged in", req.user);
            var userInfo = {
                username: req.user.username
            };
            res.send(userInfo);
        });

router.route("/")
    .get(function(req, res, next) {
        console.log(req.user);

        if (req.user) {
            res.json({
                user: req.user
            })
        } else {
            res.json({
                user: null
            })
        }
    })

router.route("/logout")
    .post(function(req, res) {
        if (req.user) {
            req.logout()
            res.send({
                message: "Logging Out.."
            })
        } else {
            res.send({
                message: "No User To Log Out."
            })
        }
    })


module.exports = router;
