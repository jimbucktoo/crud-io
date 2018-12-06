module.exports = {

	development: {
		client: 'pg',
		connection: 'postgresql://localhost/crud-io'
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL
	}

}
