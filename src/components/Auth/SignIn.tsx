import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useNotify } from 'hooks/useNotify';
import { authQueries } from 'queries/auth';
import { AuthQueryKeys, LoginFormValues } from 'queries/auth/types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'routes/types';
import { useLocalStorage } from 'react-use';
import { ACCESS_TOKEN_KEY } from 'consts';
import { userAtom } from 'state/atoms/user';
import { useAtom } from 'jotai';

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

export const SignIn = () => {
    const { notify, notifyError } = useNotify();
    const navigate = useNavigate();
    const [, setToken] = useLocalStorage(ACCESS_TOKEN_KEY, '');
    const [, write] = useAtom(userAtom);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        resolver: yupResolver(loginSchema),
    });

    const { mutate: signin } = useMutation({
        mutationKey: [AuthQueryKeys.signin],
        mutationFn: authQueries.signin,
        onSuccess: (data) => {
            const { accessToken, ...user } = data;
            notify('Login successful');
            setToken(accessToken);
            write(user);
            navigate(ROUTES.HOME);
        },
        onError: (error: unknown) => {
            notifyError(error);
        },
    });

    const onSubmit = (data: LoginFormValues) => {
        signin(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Update handleSubmit */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email')}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-bold mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register('password')}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
