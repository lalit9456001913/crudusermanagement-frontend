import { useState } from 'react';
import { signUp } from 'aws-amplify/auth';
import { API, graphqlOperation } from 'aws-amplify';
import { createUsersData } from '../lib/amplify';
import { createUser } from '../graphql/queries';
import { useRouter } from 'next/router';
import VerifyOTP from './VerifyOtp';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isOtp, setIsOtp] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = async () => {
    try {
    //   await signUp({
    //     username: email,
    //     password,
    //     attributes: { email, phone_number: phone }
    //   });
      // Once user is signed up in Cognito, create user in the backend via GraphQL
      const body={
        email,
        phone,
        firstName: 'lalit',  // Add more fields as necessary
        lastName: 'trigunayat',
        profilePhoto: ''
      }
      console.log("body-------",body)
      await createUsersData(body);
      alert('Sign up successful! Please verify OTP.');
      setIsOtp(true); // Trigger OTP verification
    } catch (err) {
      console.error('Sign up error:', err);
      setError(err.message);
    }
  };

  return (
    <div>
      {isOtp ? (
        <VerifyOTP username={email} />
      ) : (
        <>
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>Sign Up</button>
          {error && <p>{error}</p>}
        </>
      )}
    </div>
  );
};

export default SignUpForm;
