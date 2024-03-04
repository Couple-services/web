import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { userAtom } from 'state/atoms/user';

export const UserProfile = () => {
    const [user] = useAtom(userAtom);

    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value);
    };

    const handleSave = () => {
        // TODO: Implement your save logic (e.g., call API to update)
        const updatedUser = { ...user, name: newName };

        setIsEditing(false);
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className="container mx-auto">
            {/* Profile Display */}
            <h1 className="text-2xl font-bold">{user.name}</h1>
            {/* ... Other profile information (email, etc.) */}

            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newName}
                        onChange={handleNameChange}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <button onClick={handleEditClick}>Edit Name</button>
            )}
        </div>
    );
};
