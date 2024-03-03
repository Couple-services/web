import { useAtom } from 'jotai';
import { userAtom } from 'state/atoms/user';

export const Home = () => {
    const [user] = useAtom(userAtom);

    return (
        <div>
            <h1>Welcome {user?.name}</h1>
        </div>
    );
};
