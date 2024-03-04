import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">
                Welcome to Our Chat App!
            </h1>
            <p className="text-lg mb-6">
                Start chatting with your friends and colleagues
            </p>
            <Link
                to="/chat"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Chatting
            </Link>
        </div>
    );
};
