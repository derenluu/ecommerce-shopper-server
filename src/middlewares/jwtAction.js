import jwt from 'jsonwebtoken';
import { env } from '~/configs/environment';

export const createJWT = (payload) => {
  const token = null;
  try {
    token = jwt.sign(payload, env.SECRET_KEY);
  } catch (error) {
    console.log(error);
  }
  return token;
};

export const verifyJWT = (token) => {
  let data = null;
  try {
    data = jwt.verify(token, env.SECRET_KEY);
  } catch (error) {
    console.log(err);
  }
  return data;
};
