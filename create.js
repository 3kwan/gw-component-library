const fs = require("fs");
const path = require('path');

fs.readdir(__dirname, function(err, files){
	if(err){
		console.warn(err)
	}else{
		let data = []
		files.forEach(function(filename){
			const filedir = path.join(__dirname, filename)
			const stats = fs.statSync(filedir)
			if(stats.isDirectory()){
				const configPath = path.join(filedir, 'config.json')
				if(fs.existsSync(configPath)){
					let json = fs.readFileSync(configPath, 'utf-8')	
					data.push(JSON.parse(json))
				}
			}
		})
		fs.writeFile('./config.json', JSON.stringify(data), { 'flag': 'a' }, function(err) {
			if(err){
				console.warn(err)
			}else{
				console.log('success')
			}
		})
	}
})