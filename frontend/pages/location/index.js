import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (err) {
        setError('Error fetching user profile');
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push('/');
    } catch (err) {
      setError('Error logging out');
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.username}'s Profile</h2>
          <p>Email: {user.attributes.email}</p>
          <p>Phone: {user.attributes.phone_number}</p>
          {/* Add more profile details here */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>{error || 'Loading user profile...'}</p>
      )}
    </div>
  );
};

export default ProfilePage;
