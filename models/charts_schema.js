const mongoose = require('mongoose')

const chartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true
    },
    relatedValue: {
        type: Number,
        required: [true, 'Related value is required']
    },
    color: {
        type: String,
        required: [true, 'Color is required'],
        validate: {
            validator: function (v) {
                // Regex to validate hexadecimal color code format (# followed by 6 hex digits)
                return /^#[0-9A-Fa-f]{6}$/.test(v);
            },
            message: props => `${props.value} is not a valid hexadecimal color code!`
        }
    },

}, {collection: 'nbad'});
module.exports = mongoose.model('charts', chartSchema)
