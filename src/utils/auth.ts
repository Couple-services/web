import { ACCESS_TOKEN_KEY } from 'consts';

export const getAuthToken = () => {
    return JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY) || '') as string;
};

export const setAuthToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
};
