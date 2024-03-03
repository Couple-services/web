import axiosClient from 'configs/axiosClient';

enum UserRoutes {
    me = 'users/me',
}

const getCurrentUser = async () => {
    const response = await axiosClient.get(UserRoutes.me);
    return response.data;
};

export const userQueries = {
    getCurrentUser,
};
