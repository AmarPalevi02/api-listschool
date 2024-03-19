const { Days, Matkul } = require('../db/models')

const getAll = async (next) => {
   try {
      const result = await Days.findAll({
         attributes: ['id', 'day'],
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

let lastDay = -1
const createDay = async (req, next) => {
   try {
      const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

      const nextDay = (lastDay + 1) % 7

      const day = days[nextDay]

      const result = await Days.create({ day })

      lastDay = nextDay
      console.log(result)
      return result
   } catch (error) {
      next()
   }
}

module.exports = {
   getAll,
   createDay
}