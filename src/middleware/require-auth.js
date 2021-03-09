import jwt from 'jsonwebtoken';

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
            if (error) {
                res.status(401).send({ error: 'Invalid token.' });
            }
            req.userId = payload.userId;
            next();
        });
    } else {
        res.status(401).send({ error: 'No token provided.' });
    }
};

export default requireAuth;
