import React from 'react';
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'

const userPath = 'users';

export default function User() {
    const firebase = useFirebase();
    const user = useSelector(state => state.firebase.data[userPath]);

    return (
        <div>
            <h1>Users</h1>
            <div>
                {JSON.stringify(user, null, 2)}
            </div>
            <button onClick={() => firebase.watchEvent('value', userPath)}>
                Load Users
            </button>
        </div>
    );
}