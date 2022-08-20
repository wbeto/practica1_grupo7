//funcion de fibonacci
function fibonacci(numero){
    if(numero == 0){
        return 0;
    }
    if(numero == 1){
        return 1;
    }
    return fibonacci(numero - 1) + fibonacci(numero - 2);
}

module.exports = (express,app) => {
    //RETORNA FIBONACCI
    app.get("/fibo/:NUMERO", (req, res) => {
        
        var numero = req.params.NUMERO;
        //calcular fibonacci
        var resultado = fibonacci(numero);

        return res.status(200).send({
            resultado:  resultado
        });

    });

}