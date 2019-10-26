const axios = require('axios');

function post(url, message, aTitle, aText, aColor) {
	jsonObj = {
		"text": message,
		"attachments": [{
			"title": aTitle, 
			"text": aText, 
			"color": aColor
		}]
	};

	axios.post(url, jsonObj)
	.then((res) => {
	  console.log(`statusCode: ${res.status}`)
	  console.log(res.data)
	})
	.catch((error) => {
	  console.error(error)
	});

};

exports.post = (url, message, aTitle, aText, aColor) => post(url, message, aTitle, aText, aColor);