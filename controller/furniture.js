const Furniture = require('../model/furniture');
const {
    successResMsg,
    errorResMsg
} = require("../utils/responseHandler");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

exports.addFurniture = async (req, res) => {
    try {
        cloudinary.uploader.upload(req.file.path, async (error, result) => {
            if (result) {
                let image = result.secure_url;
                req.body.image = image;
                const newFurniture = await Furniture.create(req.body);
                return successResMsg(res, 200, newFurniture);
            }
        });
    } catch (err) {
        return errorResMsg(res, 500, err);
    }
}

exports.getApproved = async (req, res) => {
    try {
        const furnitures = await Furniture.find({
            status: "true"
        });
        return successResMsg(res, 200, furnitures);
    } catch (err) {
        return errorResMsg(res, 500, err);
    }
}