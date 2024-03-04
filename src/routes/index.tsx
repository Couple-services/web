import { Home } from 'components/Home';
import { SignIn } from 'components/Auth/SignIn';
import { SignUp } from 'components/Auth/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './types';
import { NotFoundPage } from 'components/NotFound';
import { ErrorPage } from 'components/Error';
import { userAtom } from 'state/atoms/user';
import { useAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { userQueries } from 'queries/user';
import { UserQueryKey } from 'queries/user/types';
import { useEffect } from 'react';
import { Chat } from 'components/Chat';
import { Navbar } from 'components/Navbar';
import { UserProfile } from 'components/Profile';

export const AppRoutes = () => {
    const [read, write] = useAtom(userAtom);
    const { data } = useQuery({
        queryKey: [UserQueryKey.me],
        queryFn: userQueries.getCurrentUser,
    });

    useEffect(() => {
        if (data) {
            write(data);
        }
    }, [data, write]);

    return (
        <BrowserRouter>
            <Navbar isLoggedIn={Boolean(read)} />
            <Routes>
                <Route
                    path={ROUTES.HOME}
                    element={<Home />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path={ROUTES.SIGN_IN}
                    element={<SignIn />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path={ROUTES.SIGN_UP}
                    element={<SignUp />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path={ROUTES.CHAT}
                    element={<Chat />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path={ROUTES.PROFILE}
                    element={<UserProfile />}
                    errorElement={<ErrorPage />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};
