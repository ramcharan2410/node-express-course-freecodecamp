const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        req.user = { name: 'john', id: 3 };
        next(); // we still need to call next() here
    }
    else {
        res.status(401).send('Unauthorized');
        // 401 for unauthorized
    }
    console.log('authorize');
    next();
}
module.exports = authorize;