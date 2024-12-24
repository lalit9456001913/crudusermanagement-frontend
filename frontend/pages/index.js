import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { signUp, signIn } from 'aws-amplify/auth';
import { useRouter } from 'next/router';
import VerifyOTP from './otp/verify';
const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState('');
  const [isOtp, setIsOtp] = useState(false);
  const router = useRouter();

  const handleAuth = async () => {
    try {
      if (!isSignUp) {
        await signUp({ username: email, password, attributes: { email, phone_number: phone } });
        alert('Sign up successful. Please verify OTP.');
        setIsOtp(true)
        // setIsSignUp(false);
      } else {
        const user = await signIn({ username: email, password });
        console.log("user----", user)
        router.push('/profile');
      }
    } catch (err) {
      console.log('what is the issue in singup', err)
      setError(err.message);
    }
  };

  return (
    <>
      {isOtp ?
        <><VerifyOTP username={email} /></>
        :
        <>
          <div>
            <h2>{!isSignUp ? 'Sign Up' : 'Login'}</h2>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isSignUp && (
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              )}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleAuth}>{!isSignUp ? 'Sign Up' : 'Log In'}</button>
              {error && <p>{error}</p>}
            </div>
          </div>
        </>
      }

    </>

  );
};

export default AuthPage;
