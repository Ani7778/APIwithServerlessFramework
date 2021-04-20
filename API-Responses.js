const Responses = {
	_200(data = {}) {
		return {
			headers: {
				"Content-Type": "Application/json"
			},
			statusCode: 200,
			body: JSON.stringify(data)
		}
	},

	_400(data = {}) {
		return {
			headers: {
				"Content-Type": "Application/json"
			},
			statusCode: 400,
			body: JSON.stringify(data)
		}
	},
}

module.exports = Responses;
