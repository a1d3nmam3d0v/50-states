let express = require('express')
let states_api = require('./routes/states')

let app = express()

app.use(express.json())

app.use('/api', states_api)

app.use(function (req, res, next) {

	
	res.status(404).send('NOT FOUND')
})

app.use(function (err, req,res,next) {
	console.log(err)
	res.status(500).send('Srvr ERR')
})

let server = app.listen(process.env.PORT || 3000, function () {
	console.log('SERVER RUNNING ON PORT', server.address().port)
})