import { QueryClient } from 'react-query';

const STALE_TIME = 1000 * 60 * 5; // 5 minutes
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: STALE_TIME,
        },
    },
});
