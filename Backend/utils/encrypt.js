// Function to encrypt a password
const encryptPassword = (password) => {
    const encryptedPassword = Buffer.from(password).toString('base64');
    return encryptedPassword;
};

// Function to decrypt a password
const decryptPassword = (encryptedPassword) => {
    const decryptedPassword = Buffer.from(encryptedPassword, 'base64').toString('utf-8');
    return decryptedPassword;
};

module.exports = { encryptPassword, decryptPassword };
