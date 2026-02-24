import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import img from '../../public/login_page_image.webp'
import { Suspense } from "react";

export default function LoginPage() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">

            {/* LEFT SIDE - IMAGE + OVERLAY */}
            <div className="relative hidden lg:block">
                <Image
                    src={img}
                    alt="Luxury Hotel"
                    sizes="full"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Branding text */}
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-white z-10">
                    <h1 className="text-4xl font-bold mb-4">
                        Experience Luxury & Comfort
                    </h1>
                    <p className="text-lg text-gray-200 max-w-md">
                        Book premium hotels at the best prices with seamless experience.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="flex items-center justify-center bg-background p-6 lg:p-12">
                <div className="w-full max-w-md">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginForm />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
