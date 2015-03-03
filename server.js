var express    = require('express');         // call express
var maxmind    = require('maxmind');
var dns        = require('dns');
var app        = express();                  // define our app using express
var port       = process.env.PORT || 8080;   // set our port
var router     = express.Router();           // get an instance of the express Router

maxmind.init('GeoLiteCity.dat')

// retrieves info about a specific ip
router.get('/api/:ip', function (req, res) {
	var ip = req.params.ip;
    res.setHeader('Content-Type', 'application/json');
    dns.reverse(ip, function (err, domains) {
		result = maxmind.getLocation(ip);
		result["ip"] = ip;
    	if (domains != undefined) {
    		result["domains"] = domains;
    	}
		res.send(JSON.stringify(result));
    });
});

// manages 404
router.get('*', function(req, res){
    res.redirect('/api/8.8.8.8');
});

app.use('/', router);
app.listen(port);
console.log("Open browser at: http://127.0.0.1:" + port);