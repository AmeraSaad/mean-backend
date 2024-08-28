const mongoose = require('mongoose')

const dbUri ='mongodb+srv://admin:admin123@cluster0.xadr5.mongodb.net/portfolio_db?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri)
}