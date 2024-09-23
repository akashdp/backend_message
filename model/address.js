const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new mongoose.Schema({
    address: {
        type: String,
        require: true,

    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;