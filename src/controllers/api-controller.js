import definitions from '../models/definitions.js';

const { User } = definitions;

export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ where: { id: req.params.id } });
        res.send(user);
    } catch (err) {
        res.json({ error: err });
        res.status(500).end();
    }
};

/*
    Make sure the body of the request is of type JSON with values:
    BE CAREFUL OF THE CASE SENSITIVITY
    {
        {
            "firstName": "firstName",
            "lastName": "lastName",
            "email": "email@email.com",
            "password": "password"
        }
    }
*/
export const postUser = async (req, res) => {
    try {
        const user = await User.create({
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            usertype: req.body.usertype,
        });
        res.send(user);
    } catch (err) {
        res.json({ error: err });
        res.status(500).end();
    }
};

export const patchUser = async (req, res) => {
    try {
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
    } catch (err) {
        res.json({ error: err });
        res.status(500).end();
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({ where: { id: req.params.id } });
        res.status(200).end();
    } catch (err) {
        res.json({ error: err });
        res.status(500).end();
    }
};

export const getSkill = async (req, res) => {
    try {
        res.send('Skill');
    } catch (err) {
        res.json({ error: err });
        res.status(500).end();
    }
};

export const getChatrooms = async (req, res) => {
    try {
        res.send('chatrooms of ');
    } catch (err) {
        res.json({ error: err });
        res.status(500).end();
    }
};
