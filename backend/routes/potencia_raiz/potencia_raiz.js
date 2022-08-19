module.exports = (express, app) => {
  //RETORNA POTENCIA CUBICA
  app.get("/potencia/:NUMERO", (req, res) => {
    var numero = req.params.NUMERO;
    //calcular cubo
    var resultado = Math.pow(numero, 3);

    return res.status(200).send({
      resultado: resultado,
    });
  });
  app.get("/raiz/:NUMERO", (req, res) => {
    var numero = req.params.NUMERO;
    //calcular raiz
    var resultado = Math.cbrt(numero);

    return res.status(200).send({
      resultado: resultado,
    });
  });
};
