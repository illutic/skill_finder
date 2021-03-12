const validateUser = async (req) => {
    const { userId } = req.body;
    if (!userId) {
        throw Error('No user ID provided.');
    }
    if (userId !== req.userId) {
        throw Error('Unauthorised.');
    }
};

export default validateUser;
