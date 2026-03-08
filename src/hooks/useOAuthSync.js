import { useState } from 'react';
import { toast } from 'react-toastify';
import { useLoginMutation, useRegisterMutation } from '../features/auth/authApi';

export function useOAuthSync() {
    const [login] = useLoginMutation();
    const [register] = useRegisterMutation();
    const [loading, setLoading] = useState(''); // 'google' or 'github' or ''

    const syncOAuthUser = async (user, providerName) => {
        setLoading(providerName);

        // We use the uid securely from Firebase as our backend password substitute
        const password = user.uid;
        const email = user.email;
        // Generate a safe username (only alphanumeric) from email or displayName
        let username = user.displayName
            ? user.displayName.replace(/[^a-zA-Z0-9]/g, '')
            : email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '');

        // Fallback if the username became empty after regex parsing
        if (!username || username.length < 3) {
            username = `user${password.slice(0, 6)}`;
        }

        try {
            // 1. Try to Login directly first
            await login({ email, password }).unwrap();
            toast.success(`Logged in with ${providerName} successfully! 🎉`);
            setLoading('');
            return true;
        } catch (err) {
            // 2. If it fails due to bad credentials or not found, try to Register them
            if (err.status === 401 || err.status === 404 || err.status === 403 || (err.data && err.data.status === 400)) {
                try {
                    await register({
                        username,
                        email,
                        password,
                        confirmPassword: password
                    }).unwrap();

                    // 3. Immediately login after successful registration
                    await login({ email, password }).unwrap();
                    toast.success(`Registered and logged in with ${providerName}! 🎉`);
                    setLoading('');
                    return true;
                } catch (regErr) {
                    console.error("OAuth Registration failed:", regErr);

                    // If the backend says "email already exists" but it wasn't registered by OAuth
                    if (regErr?.data?.message?.toLowerCase().includes('email') || regErr.status === 409) {
                        toast.error(`Email is already registered. Please log in using your original password.`);
                    } else {
                        toast.error(regErr?.data?.message || `Failed to sync ${providerName} account with our servers.`);
                    }
                    setLoading('');
                    return false;
                }
            } else {
                toast.error(err?.data?.message || `Login with ${providerName} failed.`);
                setLoading('');
                return false;
            }
        }
    };

    return { syncOAuthUser, oauthLoading: loading };
}
