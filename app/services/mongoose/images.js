const Images = require("../../api/v1/images/model");
const {NotFoundError} = require("../../errors");
const generateUrlImage = async (req) => {
    const result = `uploads/${req.file.filename}`;
  
    return result;
};

const createImages = async (req) => {
    let imageName;
    if (req.file) {
        imageName = `uploads/${req.file.filename}`;
    } else {
        imageName = "uploads/avatar/default.jpeg";
    }

    const result = await Images.create({
        name: imageName
    });

    return result;
};

const checkingImage = async (id) => {
    const result = await Images.findOne({ _id: id });
    console.log(result);
  
    if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);
  
    return result;
  };

module.exports = { createImages, generateUrlImage, checkingImage};
