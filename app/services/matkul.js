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
      const { nameMatkul, deskripsi } = req.body

      const result = await Matkul.create({
         nameMatkul,
         deskripsi,
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