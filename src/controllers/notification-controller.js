import User from '../models/User.js';

/** Get User Notifications */
export const getNotifications = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findOne({
            where: {
                id: userId,
            },
        });
        const notifications = await user.getNotifications();
        res.status(200).json(notifications);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const X = true;
