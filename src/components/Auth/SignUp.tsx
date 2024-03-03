import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useNotify } from 'hooks/useNotify';
import { authQueries } from 'queries/auth';
import { AuthQueryKeys, SignUpFormValues } from 'queries/auth/types';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'routes/types';
import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

export const SignUp = () => {
    const { notify, notifyError } = useNotify();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormValues>({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        resolver: yupResolver(signUpSchema),
    });

    const { mutate: singup } = useMutation({
        mutationKey: [AuthQueryKeys.signup],
        mutationFn: authQueries.signup,
        onSuccess: (data) => {
            notify('Sign Up successful');
            navigate(ROUTES.HOME);
        },
        onError: (error: unknown) => {
            notifyError(error);
        },
    });
    const onSubmit = (data: SignUpFormValues) => {
        singup(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-bold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register('name')}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        {errors.name && (
                            <p className="text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
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
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};
