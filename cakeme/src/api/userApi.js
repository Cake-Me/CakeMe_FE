import axiosInstance from './axiosInstance';

export const signup = async (userData) => {
  return await axiosInstance.post('/signup', userData);
};


export const login = async (loginData) => {
  return await axiosInstance.post('/login', loginData);
};
