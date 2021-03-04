import User from '../models/User.js';

export const getUser = async (req, res) => {
    res.send('🙋');
};

export const postUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
    });
    res.send(user);
};
