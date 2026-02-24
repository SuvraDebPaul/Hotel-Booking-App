import ResetPasswordClient from "@/components/auth/reset-password-client";
import { Suspense } from "react";
 
export default function ResetPasswordPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            }
        >
            <ResetPasswordClient />
        </Suspense>
    );
}
