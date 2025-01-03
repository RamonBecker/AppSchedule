const Login = require("../models/LoginModel");

exports.index = (req, res) => {
  res.render("login");
};

exports.register = function (req, res) {
  try {
    const login = new Login(req.body);
    login.register();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        res.redirect("/login");
      });

      return;
    }

    req.flash("success", "Seu usuário foi criado com sucesso");
    req.session.save(function () {
      return res.redirect("/login");
    });
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};
