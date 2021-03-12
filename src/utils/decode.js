import jwt from 'jsonwebtoken';

const decode = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res
            .status(400)
            .json({ success: false, message: 'No access token provided' });
    }
    const accessToken = req.headers.authorization.split(' ')[1];
    const decoded = await jwt.verify(accessToken, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    return next();
};

export default decode;
