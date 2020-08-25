const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide Your fistname"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 2,
        trim: true,
        select: false,
    },
    confirmPassword: {
        type: String,
        required: [true, "Please provide password"],
        trim: true,
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: "Please, Passwords are not the same",
        },
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin"],
    },
    image: {
        type: String,
    }
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;