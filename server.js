let express = require('express')
let states_api = require('./routes/states')
let path = require('path')


let app = express()

let vueAppPath = path.join(__dirname, 'client', 'dist')
app.use(express.static(vueAppPath))


app.use(express.json())

app.use('/api', states_api)

app.use(function (req, res, next) {

	
	res.status(404).send('Not found')
})

app.use(function (err, req,res,next) {
	console.log(err)
	res.status(500).send('Server err')
})

let server = app.listen(process.env.PORT || 3000, function () {
	console.log('SERVER RUNNING ON PORT', server.address().port)
})