import User from '../models/definitions.js';

export const getUser = async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.send(user);
};

export const postUser = async (req, res) => {
    const user = await User.create({
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        usertype: req.body.usertype,
    });
    res.send(user);
};

export const patchUser = async (req, res) => {
    await User.update(
        {
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            usertype: req.body.usertype,
        },
        { where: { id: req.params.id } }
    );
    res.status(200).end();
};

export const deleteUser = async (req, res) => {
    await User.destroy({ where: { id: req.params.id } });
    res.status(200).end();
};

export const getSkill = async (req, res) => {
    res.send('Skill');
};

export const getChatrooms = async (req, res) => {
    res.send('chatrooms of ');
};
