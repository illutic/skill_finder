import sequelize from 'sequelize';
import User from '../models/User.js';
import Skill from '../models/Skill.js';

const { Op } = sequelize;

export const getSkill = async (req, res) => {
    try {
        const { name } = req.params;
        if (!name) {
            throw Error('No skill name provided.');
        }
        const skill = await Skill.findAll({
            where: {
                name: {
                    [Op.iLike]: `${name}%`,
                },
            },
            include: [User],
        });
        res.json({ skill });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const postSkill = async (req, res) => {
    try {
        const { userId, name } = req.body;
        if (!userId) {
            throw Error('No user ID provided.');
        }
        if (userId !== req.userId) {
            throw Error('Unauthorised.');
        }
        if (!name) {
            throw Error('No skill name provided.');
        }
        const user = await User.findOne({
            where: {
                id: userId,
            },
        });
        const skill = await Skill.findOrCreate({
            where: {
                name,
            },
        });
        user.addSkill(skill[0]);
        res.json({ skill });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

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
