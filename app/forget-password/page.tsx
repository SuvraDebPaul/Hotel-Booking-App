"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    forgotPasswordSchema,
    ForgotPasswordType,
} from "@/lib/Auth_Schema/forgetPassword.schema";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";


export default function ForgotPasswordPage() {
    const [success, setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ForgotPasswordType>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data: ForgotPasswordType) => {
        setSuccess("");

        try {
            console.log(data)
            // Replace this with real API
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setSuccess(
                "We will sent a password reset link to your provided email."
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <Card className="w-full max-w-md shadow-xl">
                <CardContent className="p-6 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">Forgot <span className="text-primary">Password</span></h2>
                        <p className="text-muted-foreground text-sm">
                            Enter your email to receive a reset link
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Label className="mb-2">Email</Label>
                            <Input placeholder="your email" type="email" {...register("email")} />
                            {errors.email && (
                                <p className="text-sm text-destructive mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full cursor-pointer font-bold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Reset Link"}
                        </Button>
                    </form>

                    {success && (
                        <p className="text-sm text-green-600">{success}</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
