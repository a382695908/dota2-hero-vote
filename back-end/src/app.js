/**
 *
 */

const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const router = require('./config/router');
const app = express();

app.set('port', process.env.PORT || 3000)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')))

// todo add api

router(app);
app.use(function(req,res,next){
	console.log('app.use');
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
})

