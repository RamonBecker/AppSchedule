const HomeModel = require("../models/HomeModel");

// HomeModel.create({
//   titulo: "Um titulo qualquer",
//   descricao: "Uma descrição qualquer",
// })
//   .then((dados) => {
//     console.log(dados);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

exports.paginaInicial = (req, res) => {
  console.log(req.session.usuario);

  // req.flash("info", "Olá mundo!");
  // req.flash("error", "asdsasda");
  // req.flash("success", "p´lasd´pas");

  // console.log(req.flash("error"));
  // console.log(req.flash("info"));
  // console.log(req.flash("success"));
  res.render("index", {
    titulo: "Este é um  <span style='color:red'>  titulo </span>",
    numeros: [0, 1, 2, 3, 4, 5],
  });
  // console.log(`pagina inicial: ${req.session.nome}`);
  // next();
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
