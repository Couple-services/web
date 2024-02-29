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
        if (error instanceof Error) {
            toast(error.message, { type: 'error' });
        } else if (typeof error === 'string') {
            toast(error, { type: 'error' });
        }
    }, []);
    return { notify, notifyError };
}
