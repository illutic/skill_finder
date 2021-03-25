import Notification from '../models/Notification.js';
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

export const deleteNotification = async (req, res) => {
    try {
        const { notificationId } = req.body;
        if (!notificationId) {
            throw Error('No notification ID provided.');
        }
        await Notification.destroy({
            where: {
                id: notificationId,
            },
        });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
