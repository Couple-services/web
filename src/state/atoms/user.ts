import { atom } from 'jotai';
import { User } from 'queries/auth/types';

export const userAtom = atom<User | null>(null);
