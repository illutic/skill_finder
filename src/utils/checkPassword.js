import bcrypt from 'bcrypt';
import User from '../models/User.js';

const checkPassword = async (userId, password) => {
    if (!password) {
        throw Error('No password provided.');
    }
    const user = await User.findOne({
        where: {
            id: userId,
        },
    });
    if (!user) {
        throw Error('Incorrect user ID.');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect password.');
    }
    return true;
};

export default checkPassword;
