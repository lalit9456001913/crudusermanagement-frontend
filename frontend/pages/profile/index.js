import { useState, useEffect } from 'react';
import { fetchUserData } from '../../lib/amplify';
import { useRouter } from 'next/router';
import { signOut } from 'aws-amplify/auth';

const ProfilePage = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await fetchUserData();
                console.log("userdata after fecthing---",userData)
                setUser(userData?.data?.getUser);  
            } catch (error) {
                setError('Error fetching user data');
                console.error(error);
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut();
            router.push('/');
        } catch (err) {
            setError('Error logging out');
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <h2>{user.firstName}'s Profile</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>{error || 'Loading user profile...'}</p>
            )}
        </div>
    );
};

export default ProfilePage;
