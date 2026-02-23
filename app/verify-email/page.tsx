import VerifyEmailClient from "@/components/auth/verify-email-client";
import { Suspense } from "react";
 
export default function VerifyEmailPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Verifying...</div>}>
            <VerifyEmailClient />
        </Suspense>
    );
}
