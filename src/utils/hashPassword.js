import bcrypt from 'bcrypt';

async function hashPassword(password) {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
}

export default hashPassword;
