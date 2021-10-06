const redisCli = require('../helpers/redisAsync');

// Token validation middleware 
async function verifyToken(req,res,next) {
    
    const validToken = req.header('auth-token');
    if(!validToken) return res.status(401).json({error: 'Unauthorized'});

    const userId = await redisCli.getAsync(validToken);
    if(!userId) return res.status(401).json({error: 'Unauthorized'})

    try {
        req.userId = userId;
        req.validToken = validToken;
    next()
    } catch (error) {
        res.status(400).json({ error: "Token is not valid" });
    }
    
}

module.exports = verifyToken;