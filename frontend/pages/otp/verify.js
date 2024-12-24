import { useState } from 'react';
import { confirmSignUp } from 'aws-amplify/auth';
import { useRouter } from 'next/router';

const VerifyOTP = ({ username }) => {

    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleVerify = async () => {
        try {
            await confirmSignUp({ username, confirmationCode: otp });
            router.push('/profile');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Verify OTP</h2>
            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerify}>Verify</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default VerifyOTP;
