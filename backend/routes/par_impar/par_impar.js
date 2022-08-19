module.exports = (express, app) => {
  app.get("/PAROIMPAR/:NUMERO", function (req, res) {
    //console.log('Hola mundo')
    var numero = req.params.NUMERO;
    //funcion par o impar
    var resultado = numero % 2 == 0 ? "par" : "impar";

    return res.status(200).send({
      resultado: numero + " es " + resultado,
    });
  });
};
