import { useState } from 'react';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);  // Toggling between sign up and login

  return (
    <div>
      {isSignUp ? (
        <SignUpForm />
      ) : (
        <LoginForm />
      )}
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default AuthPage;
