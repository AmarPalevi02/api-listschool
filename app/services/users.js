const { Users } = require('../db/models')

const getAll = async (next) => {
   try {
      const result = await Users.findAll()

      return result
   } catch (error) {
      next(error)
   }
}

module.exports = {
   getAll
}