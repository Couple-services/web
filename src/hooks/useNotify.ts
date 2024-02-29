import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export function useNotify() {
    const notify = useCallback(
        (message: string, type: 'info' | 'success' | 'warning' | 'default') => {
            toast(message, { type });
        },
        []
    );
    const notifyError = useCallback((error: unknown) => {
        let message = 'Something went wrong';
        if (error instanceof AxiosError) {
            if (error.response?.data?.message) {
                console.log(error.response.data.message);
                message = error.response.data.message;
            } else {
                message = error.message;
            }
        } else if (error instanceof Error) {
            message = error.message;
        } else if (typeof error === 'string') {
            message = error;
        }
        toast(message, { type: 'error' });
    }, []);
    return { notify, notifyError };
}
