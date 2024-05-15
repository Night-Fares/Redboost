router.post("/login", (req, res, next) => {
  passport.authenticate("login", (error, user, info) => {
    if (error) {
      return res.status(500).json({
        message: "Something is wrong logging in",
        error: error.message || "internal server error",
      });
    }
    if (!user) {
      return res.status(401).json(info);
    }
    req.login(user, (error) => {
      if (error) {
        return res.status(500).json({
          message: "Something is wrong logging in",
          error: error.message || "internal server error",
        });
      }
      req.session.email = user.email; // Assuming user object has an email field
      req.session.save(() => {
        // Ensure the session is saved before sending the response
        return res.json({ user, info });
      });
    });
  })(req, res, next);
});
