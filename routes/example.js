module.exports = (express,app) => {
	app.get('/hello',function(req,res){
        res.send('hello')
	})

	app.post('/hello',function(req,res){
        
        
        if(req.body.hello){
            res.send(req.body.hello)
        }else{
            res.send('hello')
        }
    })
}