const mongoose = require("mongoose");

const funSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    amount: {
        type: Number,
    },
    image: {
        type: String,
    },
    status: {
        type: String,
        default: "false"
    },
    rating: {
        type: Number
    }
});



const Furniture = mongoose.model(" Furniture", funSchema);

module.exports = Furniture;