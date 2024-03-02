import axiosClient from 'configs/axiosClient';
import { LoginFormValues, SignUpFormValues } from './types';

enum AuthRoutes {
    signin = '/auth/signin',
    signup = '/auth/signup',
}

const signin = async (data: LoginFormValues) => {
    const response = await axiosClient.post(AuthRoutes.signin, data);
    return response.data;
};
const signup = async (data: SignUpFormValues) => {
    const response = await axiosClient.post(AuthRoutes.signup, data);
    return response.data;
};
export const authQueries = {
    signin,
    signup,
};
