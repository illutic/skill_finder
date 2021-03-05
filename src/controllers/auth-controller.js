import User from '../models/User.js';

export const logIn = (req, res) => {
    res.send('👍');
};

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
        });
        res.send(user);
    } catch (err) {
        const errors = err.errors.map((e) => [e.path, e.message]);
        res.status(400).send({ errors });
    }
};
