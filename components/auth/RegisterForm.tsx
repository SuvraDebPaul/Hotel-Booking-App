"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterType } from "@/lib/Auth_Schema/register.schema";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";
import SocialLogin from "../Buttons/SocialLogin";
import Link from "next/link";

export default function RegisterForm() {
    const router = useRouter();
    const params = useSearchParams();
    const callback = params.get("callbackUrl") || "/"
    const [serverError, setServerError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [showPass, setShowPass] = useState<boolean>(false);
    const [showPass2, setShowPass2] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterType>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterType) => {
        try {
            setServerError("");
            setUploading(true);

            // Upload image to imgbb
            const formData = new FormData();
            formData.append("image", data.image[0]);

            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const imgData = await res.json();

            if (!imgData.success) {
                throw new Error("Image upload failed");
            }

            const imageUrl = imgData.data.url;

            const newUser = {
                name: data.name,
                email: data.email,
                password: data.password,
                image: imageUrl,
            };
           const result = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            }); 
            if(result.ok) {
                await Swal.fire({
                    title: "Welcome",
                    text: "You Successfully create your account",
                    icon: "success",
                    confirmButtonColor: "#2387fa"
                });
                router.push(callback);
            }       
        } catch {
            setServerError("Registration failed. Try again.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <Card className="w-full max-w-md shadow-xl">
            <CardContent className="p-6 space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold">Create <span className="text-primary">Account</span></h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Image Upload */}
                    <div>
                        <Label className="mb-2">Profile Image</Label>
                        <Input type="file" accept="image/*" {...register("image")} />
                        {errors.image && (
                            <p className="text-sm text-destructive mt-1">
                                {errors.image.message as string}
                            </p>
                        )}
                    </div>

                    {/* Username */}
                    <div>
                        <Label className="mb-2">Username</Label>
                        <Input placeholder="Your name" type="text" {...register("name")} />
                        {errors.name && (
                            <p className="text-sm text-destructive mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <Label className="mb-2">Email</Label>
                        <Input placeholder="example@email.com" type="email" {...register("email")} />
                        {errors.email && (
                            <p className="text-sm text-destructive mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Label className="mb-2">Password</Label>
                        <Input placeholder="••••••••" type={showPass ? "text" : "password"} {...register("password")} />
                        <span
                            onClick={() => setShowPass(!showPass)}
                            className="absolute right-4 top-8 cursor-pointer"
                        >
                            {showPass ? <FaEyeSlash /> : <FaEye />}
                        </span>

                        {errors.password && (
                            <p className="text-sm text-destructive mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <Label className="mb-2">Confirm Password</Label>
                        <Input placeholder="••••••••" type={showPass2 ? "text" : "password"} {...register("confirmPassword")} />
                        <span
                            onClick={() => setShowPass2(!showPass2)}
                            className="absolute right-4 top-8 cursor-pointer"
                        >
                            {showPass2 ? <FaEyeSlash /> : <FaEye />}
                        </span>

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
                        className="w-full cursor-pointer font-bold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
                        disabled={isSubmitting || uploading}
                    >
                        {uploading ? "Uploading..." : "Register"}
                    </Button>
                </form> 

                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-sm text-muted-foreground">OR</span>
                    <div className="h-px flex-1 bg-border" />
                </div>

                <SocialLogin></SocialLogin>

                <Link href={"/login"}>
                    Already have an account?{" "} <span className="text-blue-400 hover:underline hover:text-blue-600 hover:font-medium transition-all duration-300">Log in</span>
                </Link>

            </CardContent>
        </Card>
    );
}
