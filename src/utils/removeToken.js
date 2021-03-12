const removeToken = (res) => {
    res.cookie('origin', '', { maxAge: 1 });
    res.cookie('google', '', { maxAge: 1 });
};

export default removeToken;
