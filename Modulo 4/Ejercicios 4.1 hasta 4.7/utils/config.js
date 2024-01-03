require('dotenv').config()

const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI || 
		'mongodb+srv://Nicolas1997:ZLtmOEhBZP9hKMSF@cluster0.0vvy4j1.mongodb.net/blogs?retryWrites=true&w=majority'

module.exports = {
  MONGODB_URI,
  PORT
}