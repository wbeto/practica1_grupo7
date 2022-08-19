module.exports = (express,app) => {
	app.get('/',function(req,res){
        return res.status(200).send({
            name : "Analisis y Diseño 1 ",
            website: "Practica 1 - Grupo #7",
            
            1:{nombre: "Jairo Sebastian Ramírez Palacios",carnet: "201800712"},
            2:{nombre: "José Francisco Santos Salazar",carnet: "201643762"},
            3:{nombre: "W Guay Sen Rafael Herrador Reyes",carnet: "200714200"},
            4:{nombre: "Carlos Emilio Campos Morán",carnet: "201612332"}
            
        })
	})
}