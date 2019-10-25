const axios = require('axios')

function post(scanPath, scanId, feedback)
{

	url = 'https://chat.doobinnovation.com/hooks/eZfAC2BgpD6vPLwS8/r9GKi89vNMJiJwh4p5PewfviPkg5pEzThNjWzBxnivJCReds'

	jsonObj = {
		"text": scanPath,
		"attachments": [{
			"title": scanId, 
			"text": feedback, 
			"color": "#764FF5"
		}]
	}

	axios.post(url, jsonObj)
	.then((res) => {
	  console.log(`statusCode: ${res.statusCode}`)
	  console.log(res)
	})
	.catch((error) => {
	  console.error(error)
	})

}

exports.post = (scanPath, scanId, feedback) => post(scanPath, scanId, feedback);