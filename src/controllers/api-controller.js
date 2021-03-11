import User from '../models/User.js';
import Skill from '../models/Skill.js';

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
            firstName: req.body.firstName,
            lastName: req.body.lastName,
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
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                usertype: req.body.usertype,
            },
            { where: { id: req.params.id } }
        );
        res.status(200).end();
    } catch (err) {
        res.json({ error: err });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({ where: { id: req.params.id } });
        res.status(200).end();
    } catch (err) {
        res.json({ error: err });
    }
};

export const getSkill = async (req, res) => {
    try {
        const skill = await Skill.findAll({
            where: { skillName: req.params.name },
            include: [{ model: User, required: true }],
        });
        res.send(skill);
    } catch (err) {
        res.json(err);
    }
};

// export const postSkill = async (req, res) => {
//     try {
//         await Skill.findOrCreate({
//             where: { skillName: req.body.skillName },
//             defaults: { skillName: req.body.skillName },
//         }).then(([instance]) => {
//             if (req.body.userId != null) {
//                 UserSkill.create({
//                     skillId: instance.id,
//                     userId: req.body.userId,
//                 });
//             }
//             res.send(instance);
//         });
//         await User.update(
//             { usertype: 'teacher' },
//             { where: { id: req.body.userId } }
//         );
//     } catch (err) {
//         res.send(err);
//     }
// };

// export const deleteSkill = async (req, res) => {
//     try {
//         const skill = await Skill.find({
//             where: { skillName: req.params.name },
//         });
//         await UserSkill.destroy({
//             where: { userId: req.body.userId, skillId: skill.id },
//         });
//         res.status(200);
//     } catch (error) {
//         res.send(error);
//     }
// };

export const getChatrooms = async (req, res) => {
    try {
        res.send('chatrooms of ');
    } catch (err) {
        res.json({ error: err });
        res.status(500).end();
    }
};
