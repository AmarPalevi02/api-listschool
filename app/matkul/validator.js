const { body, validationResult } = require('express-validator')

const validationCreate = [
   body('nameMatkul').notEmpty().withMessage('Nama matakuliah wajib di isi!'),
   body('deskripsi').notEmpty().withMessage('Deskripsi matkul wajib di isi!'),

   (req, res, next) => {
      const error = validationResult(req)
      if (!error.isEmpty()) {
         return res.status(422).json({
            message: 'error',
            error: error.array()
         })
      }
      next()
   }
]

module.exports = {
   validationCreate
}