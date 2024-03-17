const { Days, Matkul } = require('../db/models')

const getAll = async (next) => {
   try {
      const result = await Days.findAll({
         attributes: ['id','day'],
         include: {
            model: Matkul,
            attributes: ['id', 'nameMatkul', 'description', 'dayId']
         }
      })

      return result
   } catch (error) {
      next()
   }
}

const createDay = async (req, next) => {
   try {
      const { day } = req.body
      const result = await Days.create({ day })

      return result
   } catch (error) {
      next()
   }
}

module.exports = {
   getAll,
   createDay
}