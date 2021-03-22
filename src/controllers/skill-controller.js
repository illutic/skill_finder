import sequelize from 'sequelize';
import User from '../models/User.js';
import Skill from '../models/Skill.js';

const { Op } = sequelize;

/** Get Users that teach a specific skill.
 * @param {string} name - Requires a skill name url parameter.
 */
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
            include: {
                model: User,
                attributes: {
                    exclude: ['email', 'password'],
                },
            },
            limit: 15,
        });
        res.json(skill);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Adds a skill to the user's Model.
 * @param {string} name - Requires a skill name parameter in the request body.
 */
export const postSkill = async (req, res) => {
    try {
        const { name } = req.body;
        const { userId } = req;
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

/** Delete's a skill from the User Model.
 * @param {uuid} skillId - Requires a skill Id parameter in the request body.
 */
export const deleteSkill = async (req, res) => {
    try {
        const { skillId } = req.body;
        const { userId } = req;
        if (!skillId) {
            throw Error('No skill ID provided.');
        }
        const user = await User.findOne({
            where: { id: userId },
        });
        const skill = await Skill.findOne({
            where: { id: skillId },
        });
        user.removeSkill(skill);
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
