// It requires "export default" if you export only one function from a file.
// v Delete when you have more functions to export (I assume there will be more)
// eslint-disable-next-line
export const getChatrooms = async (req, res) => {
    try {
        res.send('chatrooms of ');
    } catch (err) {
        res.json({ error: err });
    }
};
