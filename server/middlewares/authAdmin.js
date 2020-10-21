const Users = require('../models/userModel')

exports.authAdmin = async (req, res, next) => {
    try {
      const user = await Users.findOne({ id: req.user.id})

      if(user.role === 0) return res.status(400).json({msg: 'Admin resource access denied'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}