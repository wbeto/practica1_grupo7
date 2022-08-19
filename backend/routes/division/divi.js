module.exports = (express,app) => {
	app.get('/DIVI/:NUMERO1/:NUMERO2',function(req,res){
        var numero1 = req.params.NUMERO1;
        var numero2 = req.params.NUMERO2;

        if(parseInt(numero2) === 0){
                return res.send({
                                resultado: "No se puede dividir por 0"
                });
        }

        var divi = parseInt(numero1) / parseInt(numero2)

        
        res.send({
                resultado:divi.toString()
        })
	})
}