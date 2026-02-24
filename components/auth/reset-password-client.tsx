"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    resetPasswordSchema,
    ResetPasswordType,
} from "@/lib/Auth_Schema/forgetPassword.schema";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ResetPasswordClient() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ResetPasswordType>({
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = async (data: ResetPasswordType) => {
        if (!token) {
            setServerError("Invalid or missing token.");
            return;
        }

        try {
            console.log(data);

            await new Promise((resolve) => setTimeout(resolve, 1500));

            router.push("/login");
        } catch {
            setServerError("Reset failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <Card className="w-full max-w-md shadow-xl">
                <CardContent className="p-6 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Reset <span className="text-primary">Password</span>
                        </h2>
                        <p className="text-muted-foreground text-sm">
                            Enter your new password
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Label className="mb-2">New Password</Label>
                            <Input
                                placeholder="Type password"
                                type="password"
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-sm text-destructive mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Label className="mb-2">Confirm Password</Label>
                            <Input
                                placeholder="Retype password"
                                type="password"
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword && (
                                <p className="text-sm text-destructive mt-1">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        {serverError && (
                            <p className="text-sm text-destructive">{serverError}</p>
                        )}

                        <Button
                            type="submit"
                            className="w-full font-bold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Resetting..." : "Reset Password"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
