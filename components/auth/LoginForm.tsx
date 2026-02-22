"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginType } from "@/lib/auth.schema";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import SocialLogin from "../Buttons/SocialLogin";
import Link from "next/link";
import Swal from "sweetalert2";


export default function LoginForm() {
    const router = useRouter();
    const [serverError, setServerError] = useState("");
    const params = useSearchParams()
    const callback = params.get("callbackUrl") || "/"

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginType) => {
        setServerError("");

        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
            callbackUrl: callback
        });

        if (result?.error) {
            setServerError("Invalid email or password");
            return;
        }
        Swal.fire({
            title: "Welcome Back",
            text: "You Successfully Logged in your account",
            icon: "success",
            confirmButtonColor: "#2387fa"
        });
        router.push(callback);
    };

    return (
        <Card className="w-full max-w-md shadow-lg">
            <CardContent className="space-y-6 p-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Welcome <span className="text-primary">Back</span></h2>
                    <p className="text-muted-foreground text-sm">
                        Login to continue booking your stay
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Email */}
                    <div>
                        <Label className="mb-2">Email</Label>
                        <Input type="email" {...register("email")} />
                        {errors.email && (
                            <p className="text-sm text-destructive mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <Label className="mb-2">Password</Label>
                        <Input type="password" {...register("password")} />
                        {errors.password && (
                            <p className="text-sm text-destructive mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <input
                             required                               type="checkbox"
                                {...register("remember")}
                                className="h-4 w-4 rounded border border-border"
                            />
                            <Label>Remember me</Label>
                        </div>

                        <Link href={'/forgetPass'}
                            type="button"
                            className="text-blue-400 hover:underline hover:text-blue-600 hover:font-medium transition-all duration-300"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {serverError && (
                        <p className="text-sm text-destructive">{serverError}</p>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </Button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-sm text-muted-foreground">OR</span>
                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* Google Login */}
                <SocialLogin></SocialLogin>
                <Link href={"/register"}>
                    Don’t have an account?{" "} <span className="text-blue-400 hover:underline hover:text-blue-600 hover:font-medium transition-all duration-300">Create one</span>
                </Link>
            </CardContent>
        </Card>
    );
}
