var alrevez = (cad) => {

    var x = cad.length;
    var cadena = "";
    while (x>=0) {
        cadena = cadena + cad.charAt(x);
        x--;
    }
    return cadena;
    
};
module.exports = (express,app) => {
	app.get('/ALREVEZ/:PALABRA',function(req,res){
        var palabra = req.params.PALABRA;
        res.send(alrevez(palabra))
	})
}