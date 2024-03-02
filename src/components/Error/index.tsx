import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export function ErrorPage() {
    const error = useRouteError();
    let errorMessage = '';
    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-16">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4 text-red-600">Oops!</h1>
                <p className="text-xl mb-6">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="text-gray-500">
                    <i>{errorMessage}</i>
                </p>
            </div>
        </div>
    );
}
