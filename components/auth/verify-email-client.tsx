"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VerifyEmailClient() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [message, setMessage] = useState("Verifying your email...");

    useEffect(() => {
        // if (!token) {
        //     setStatus("error");
        //     setMessage("Invalid verification link.");
        //     return;
        // }

        const verify = async () => {
            try {
                const res = await fetch("", {
                    method: "POST",
                });

                const data = await res.json();

                if (res.ok) {
                    setStatus("success");
                    setMessage("Email verified successfully!");
                } else {
                    setStatus("error");
                    setMessage(data?.error || "Verification failed.");
                }
            } catch {
                setStatus("error");
                setMessage("Something went wrong.");
            }
        };

        verify();
    }, [token]);

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-md text-center shadow-xl">
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold">
                        {status === "loading"
                            ? "Verifying..."
                            : status === "success"
                                ? "Email Verified ✅"
                                : "Verification Failed ❌"}
                    </h2>

                    <p className="text-muted-foreground">{message}</p>

                    {status !== "loading" && (
                        <Button onClick={() => router.push("/login")} className="w-full cursor-pointer font-bold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                            Go to Login
                        </Button>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
