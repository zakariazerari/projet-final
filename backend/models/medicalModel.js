let mongoose = require('mongoose')

let medicalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true,
})


module.exports = mongoose.model('Medical', medicalSchema)