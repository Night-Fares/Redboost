const express = require("express");
const passport = require("passport");

const router = express.Router();

router.post("/login", async (req, res, next) => {
  passport.authenticate(
    "login",
    {
      successRedirect: "/dash",
      failureRedirect: "/",
      failureMessage: true,
      keepSessionInfo: true,
    },
    async (error, user, info) => {
      console.log("req user", req.user);
      console.log("req session", req.session);
      try {
        if (error) {
          return res.status(500).json({
            message: "Something is wrong logging in",
            error: error || "internal server errror",
          });
        }

        //req.login is provided by passport to serilize user id
        req.login(user, async (error) => {
          if (error) {
            res.status(500).json({
              message: "Something is wrong logging in",
              error: error || "internal server errror",
            });
          }
          req.session.email = user.email;
          return res.send({ user, info });
        });
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
});

module.exports = router;
