import {
    faCommentDots,
    faHouse,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes/types';

interface NavProps {
    isLoggedIn: boolean;
}

export const Navbar = ({ isLoggedIn }: NavProps) => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
            <Link to={ROUTES.HOME} className="text-xl font-bold">
                Chat App
            </Link>
            <ul className="flex items-center">
                <li className="mr-6">
                    <Link to={ROUTES.HOME}>
                        <FontAwesomeIcon
                            icon={faHouse}
                            className="hover:text-gray-400"
                        />
                    </Link>
                </li>
                <li className="mr-6">
                    <Link to={ROUTES.CHAT}>
                        <FontAwesomeIcon
                            icon={faCommentDots}
                            className="hover:text-gray-400"
                        />
                    </Link>
                </li>
                <li>
                    <button
                        className="focus:outline-none"
                        onClick={() => setShowUserMenu(!showUserMenu)}>
                        <FontAwesomeIcon
                            icon={faUser}
                            className="hover:text-gray-400"
                        />
                    </button>

                    {showUserMenu && (
                        <div className="absolute right-2 top-14 mt-2 bg-white rounded shadow-md py-1 px-1 min-w-40">
                            <Link
                                to={ROUTES.PROFILE}
                                className="block px-4 py-2 hover:bg-gray-200 text-black w-full text-left">
                                Profile
                            </Link>

                            {isLoggedIn ? (
                                <button className="block px-4 py-2 hover:bg-gray-100 text-black w-full text-left">
                                    Sign out
                                </button>
                            ) : (
                                <Link
                                    to={ROUTES.SIGN_IN}
                                    className="block px-4 py-2 hover:bg-gray-100 text-black w-full text-left">
                                    Sign in
                                </Link>
                            )}
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};
