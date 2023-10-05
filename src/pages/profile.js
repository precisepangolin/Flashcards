import React, { useState, useEffect } from "react";
import axios from 'axios';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Make an API call to get the user's profile data
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the token from localStorage
                const response = await axios.get('/profile', {
                    headers: {
                        Authorization: token, // Pass the token in the request headers
                    },
                });

                if (response.status === 200) {
                    setUserData(response.data.profile);
                    setLoading(false);
                } else {
                    setError('Failed to fetch user profile');
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setError('Error fetching user profile');
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <p>Name: {userData.name}</p>
                    <p>Last Name: {userData.lastname}</p>
                    <p>Email: {userData.email}</p>
                    <p>Username: {userData.username}</p>
                    {/* Add other user data fields here */}
                </div>
            )}
        </div>
    );
}

export default Profile;