const mongoose = require('mongoose');

const connectMongoDatabase = async () => {
	mongoose.set('strictQuery', true);

	const connected = await mongoose.connect(
		'mongodb+srv://saba123:saba123@saba.wwz5a5f.mongodb.net/'
	);

	console.log((`Mongo Connected: ${connected.connection.host}`));
};

module.exports = connectMongoDatabase;