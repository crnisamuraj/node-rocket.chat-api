const axios = require('axios')



jsonObj = {
	"text": "scanPath",
	"attachments": [{
		"title": "this.scanId", 
		"text": "this.feedback", 
		"color": "#764FF5"
	}]
}

url = 'https://chat.doobinnovation.com/hooks/eZfAC2BgpD6vPLwS8/r9GKi89vNMJiJwh4p5PewfviPkg5pEzThNjWzBxnivJCReds'

axios.post(url, jsonObj)
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})