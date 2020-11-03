const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, `yeu cau 'title'`]
    },
    categories: [{
        type: ObjectId,
        ref: 'categories'
    }]
})

module.exports = schema