const Responses = require("./API-Responses")

exports.handler = async event => {
	console.log("event", event)

	if (!event.pathParamethers || !event.pathParamethers.ID) {
		// failed without an ID
		return Responses._400({message: "Missing the ID from the path"})
	}

	let ID = event.pathParamethers.ID;

	if (data[ID]) {
		//return the data
		return Responses._200(data[ID])
	}

	//failed as ID is not in the data
	return Responses._400({message: "No ID in data"})
}

const data = {
	1234: {name: "Lusine Gevorgyan", age: 26, job: "singer"},
	5678: {name: "James Patrick", age: 38, job: "journalist"},
	7856: {name: "David Johnson", age: 29, job: "sportsman"},
}
