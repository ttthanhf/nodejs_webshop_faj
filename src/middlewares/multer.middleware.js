const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
         cb(null, 'src/public/img/products');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload an image.', 400), false);
    }
};
exports.upload = multer({
    storage: storage,
    fileFilter: fileFilter
    // limits: {
    //     fileSize: 1024 * 1024 * 6
    // }
});