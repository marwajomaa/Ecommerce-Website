const jwt = require("jsonwebtoken");
const httpError = require("../middlewares/http-error");

module.exports.createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

module.exports.createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports.refreshToken = (req, res, next) => {
    try{
        const rf_token = req.cookies.refreshToken;

    if(!rf_token) return next(new httpError('Please login or register'), 400) 

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user, next) => {
        if(err) return next(new httpError('Please login or register'), 500)

        const accessToken = createAccessToken({id: user.id})

        res.json({user, accessToken})
    })

    return res.json({rf_token})
    } catch (err) {
        return next(new httpError(err.message), 500)
    }
}
