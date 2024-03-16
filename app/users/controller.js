const { getAll } = require('../services/users')

const index = async (req, res, next) => {
   try {
      const result = await getAll()

      res.status('200').json({
         status: 'OK',
         message: 'success',
         data: result
      })

   } catch (error) {
      next(error)
   }
}

module.exports = {
   index
}