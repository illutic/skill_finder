import sequelize from 'sequelize';
import User from '../models/User.js';
import Skill from '../models/Skill.js';

const { Op } = sequelize;

// It requires "export default" if you export only one function from a file.
// v Delete when you have more functions to export (I assume there will be more)
// eslint-disable-next-line
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
        res.status(400).json({ error: err });
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
