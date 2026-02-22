"use client"
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("google")}
        >
            <FcGoogle />
            Continue with Google
        </Button>
    );
};

export default SocialLogin;