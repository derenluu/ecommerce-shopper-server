const bcrypt = require('bcrypt');

export const hashData = async (data) => {
  try {
    // Băm dữ liệu với số vòng lặp là 10
    const hashedData = await bcrypt.hash(data, 10);
    return hashedData;
  } catch (error) {
    throw new Error('Error hashing data: ' + error.message);
  }
};

export const decryptData = async (data, hashedData) => {
  try {
    // Xác minh dữ liệu băm
    const result = await bcrypt.compare(data, hashedData);
    return result;
  } catch (error) {
    throw new Error('Error decrypting data: ' + error.message);
  }
};
