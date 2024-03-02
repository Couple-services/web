export interface LoginFormValues {
    email: string;
    password: string;
}

export interface SignUpFormValues {
    name: string;
    email: string;
    password: string;
}

export enum AuthQueryKeys {
    signin = 'signin',
    signup = 'signup',
}
