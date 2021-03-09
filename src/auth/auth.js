import authOrigin from '../utils/authOrigin.js';
import authGoogle from '../utils/authGoogle.js';

const auth = async (req, res, next) => {
    const originToken = req.cookies.origin;
    const googleToken = req.cookies.google;
    if (originToken || googleToken) {
        const authCheck = originToken
            ? await authOrigin(originToken)
            : await authGoogle(googleToken);
        if (!authCheck) {
            res.status(401).send({ error: 'Invalid token.' });
        }
        next();
    } else {
        res.status(401).send({ error: 'No token provided.' });
    }
};

export default auth;
