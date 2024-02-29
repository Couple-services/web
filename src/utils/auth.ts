const AUTH_TOKEN_KEY = 'authToken';
export const getAuthToken = () => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const setAuthToken = (token: string) => {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
};
