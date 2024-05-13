import multer from 'multer'
import path from 'path'
import * as dotenv from 'dotenv'
import crypto from 'crypto'

dotenv.config()

const imageFolderPath = path.join(__dirname, '../../', 'uploads')

const generateFileName = (bytes = 8) =>
  crypto.randomBytes(bytes).toString('hex')

const upload = multer({
  // storage: multer.memoryStorage(),
  limits: {
    fileSize: 100_000_000,
    files: 10,
  },
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, imageFolderPath)
    },
    filename: function (req, file, cb) {
      cb(null, generateFileName() + path.extname(file.originalname))
    },
  }),
})

export default upload
