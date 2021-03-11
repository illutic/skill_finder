// eslint-disable-next-line
export const getChatrooms = async (req, res) => {
    try {
        res.send('chatrooms of ');
    } catch (err) {
        res.json({ error: err });
        res.status(500).end();
    }
};
