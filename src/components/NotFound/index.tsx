export const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-16">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">Oops! 404</h1>
                <p className="text-xl mb-6">
                    Looks like that page doesn't exist.
                </p>
                <a
                    href="/"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block">
                    Go Back Home
                </a>
            </div>
        </div>
    );
};
