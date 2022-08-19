module.exports = (express, app) => {
  app.get("/multiplicacion/:NUMERO1/:NUMERO2", function (req, res) {
    var numero1 = req.params.NUMERO1;
    var numero2 = req.params.NUMERO2;
    //calcular division
    var resultado = numero1 * numero2;

    return res.status(200).send({
      resultado: resultado,
    });
  });
};
