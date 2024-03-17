const { Matkul } = require('../db/models')

const getAll = async (next) => {
   try {
      const result = await Matkul.findAll()

      return result
   } catch (error) {
      next(error)
   }
}

const createMatkul = async (req, next) => {
   try {
      const { nameMatkul, description, dayId } = req.body

      const result = await Matkul.create({
         nameMatkul,
         description,
         dayId,
         createdAt: new Date(),
         updatedAt: new Date()
      })

      return result
   } catch (error) {
      next(error)
   }
}

module.exports = {
   getAll,
   createMatkul
}