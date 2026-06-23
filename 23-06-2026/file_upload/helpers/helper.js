const fs = require('fs/promises');
const path = require('path');

const fileUploadMiddleware = async (req, res, next) => {
    try {
        const folderName = process.env.UPLOAD_FOLDER || 'uploads'
        await fs.mkdir(path.join(process.cwd(), folderName), { recursive: true })

        if(!req.files  || Object.keys(req.files).length === 0){
            return res.status(400).json({message: 'no files were uploaded'})
        }

        const uploadedFile = req.files.image;
        if(!uploadedFile){
            return res.status(400).json({message: 'no file named image'});
        }

        const allowedExtensions = ['.jpg', '.png', '.jpeg'];
        const fileExtension = path.extname(uploadedFile.name);

        if(!allowedExtensions.includes(fileExtension)){
            return res.status(400).json({message: 'invalid file type, only send images'})
        }

        const fileBuffer = uploadedFile.data;
        // generate a unique name
        const uploadedFileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}-${uploadedFile.name}`;

        const destinationPath = path.join(process.cwd(), folderName, uploadedFileName);

        await fs.writeFile(destinationPath, fileBuffer)

        next();
    } catch (error) {
        next(error)
    }
}

module.exports = {
    fileUploadMiddleware
}