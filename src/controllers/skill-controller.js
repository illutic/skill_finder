import Fuse from 'fuse.js';
import sequelize from 'sequelize';
import User from '../models/User.js';
import Skill from '../models/Skill.js';

const { Op } = sequelize;

/** Get Users By Skill Name
 * @param {string} name - Requires a skill name passed as URL parameter.
 */
export const getSkill = async (req, res) => {
    try {
        const { userId } = req;
        const { name } = req.params;
        if (!name) {
            throw Error('No skill name provided.');
        }
        const searchOptions = {
            includeScore: true,
            keys: ['name'],
        };
        const skills = await Skill.findAll({
            include: {
                model: User,
                where: { id: { [Op.not]: userId } },
                attributes: {
                    exclude: ['email', 'password'],
                },
            },

            limit: 15,
        });
        const fuse = new Fuse(skills, searchOptions);
        const fuseResult = fuse.search(name);
        res.json(fuseResult[0].item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Add User Skill
 * @param {string} name - Requires a skill name parameter passed in the request body.
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

/** Delete User Skill
 * @param {uuid} skillId - Requires a skill ID parameter passed in the request body.
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
