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

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface SignInResponse extends User {
    accessToken: string;
}
