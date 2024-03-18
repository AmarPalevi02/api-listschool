const { body, validationResult } = require('express-validator')

const validationCreate = [
   body(' day').notEmpty().withMessage('Hari wajib di isi!'),

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