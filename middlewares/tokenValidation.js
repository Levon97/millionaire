const redisCli = require('../helpers/redisAsync');
const { UnauthorizedError } = require('../modules/customErrors');

// Token validation middleware 
async function verifyToken(req, res, next) {
    try {
        const validToken = req.header('auth-token');
        if (!validToken) throw new UnauthorizedError('Unauthorized');

        const userId = await redisCli.getAsync(validToken);
        if (!userId) throw new UnauthorizedError('Unauthorized');

        req.userId = userId;
        req.validToken = validToken;
        next()
    } catch (error) {
        res.status(401).json({ error: error.message });
    }

}

module.exports = verifyToken;