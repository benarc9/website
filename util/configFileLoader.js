let fs = require('fs');

const loadConfig = function (path){
	let configFile = fs.readFile(path, err => {
		if (err) {
			return console.log(err);
		}
	});

	console.log(configFile);
	return JSON.parse(configFile);
}

exports.loadConfig = loadConfig;
