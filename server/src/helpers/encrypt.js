import bycrypt from "bcrypt";


const encryptPassword = async (password) => {
    const salt = await bycrypt.genSalt(12);
    const hashedPassword = await bycrypt.hash(password, salt);

    return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
    const compare = await bycrypt.compare(password, hashedPassword);
    return compare;
};

export default { encryptPassword, comparePassword };