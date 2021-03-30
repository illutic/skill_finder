const encodeWord = (word) => {
    return word[0] + '*'.repeat(word.length - 2) + word.slice(-1);
};

const encodeEmail = (email) => {
    const split = email.split('@');
    return `${encodeWord(split[0])}@${encodeWord(split[1])}`;
};

export default encodeEmail;
