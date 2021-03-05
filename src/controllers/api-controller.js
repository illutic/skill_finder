import User from '../models/User.js';

export const getUser = async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.send(user);
};

export const postUser = async (req, res) => {
    const { firstName, lastName, email, password, type } = req.body;
    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        type,
    });
    res.send(user);
};

export const searchSkill = async (req, res) => {
    res.send('Skill');
};

export const getChatrooms = async (req, res) => {
    res.send('chatrooms of ');
};
