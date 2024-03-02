import { Home } from 'components/Home';
import { SignIn } from 'components/Auth/SignIn';
import { SignUp } from 'components/Auth/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './types';
import { NotFoundPage } from 'components/NotFound';
import { ErrorPage } from 'components/Error';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
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
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};
