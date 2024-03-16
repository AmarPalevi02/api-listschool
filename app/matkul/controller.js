const { getAll, createMatkul } = require('../services/matkul')

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

const create = async (req, res, next) => {
   try {
      const result = await createMatkul(req)

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
   index,
   create
}