const { body, query, param } = require('express-validator')
const path = require('path');

const validations = {
    fileUpload: [
        body('image').custom((value, { req }) => {
            if (!req.files || !req.files.image) {
                throw new Error('Image file is required from express-fileupload');
            }

            const uploadedFile = req.files.image;
            if(!uploadedFile){
                 throw new Error('file key must be image');
            }

            const allowedExtensions = ['.jpg', '.png', '.jpeg'];
            const fileExtension = path.extname(uploadedFile.name);

            if (!allowedExtensions.includes(fileExtension)) {
                throw new Error('File must be image format from express-fileupload');
            }

            return true;
        })
    ]
};

module.exports = {
    validations
}