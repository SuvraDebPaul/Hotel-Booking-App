import Image from 'next/image';
import img from '../../public/register_page_image.avif'
import RegisterForm from '@/components/auth/RegisterForm';
import { Suspense } from 'react';

export const metadata = {
    title: "Registration"
}


const Register = () => {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="flex items-center justify-center bg-background p-6 lg:p-12">
                <div className="w-full max-w-md">
                    <Suspense>
                        <RegisterForm />
                    </Suspense>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative hidden lg:block">
                <Image
                    src={img}
                    alt="Luxury Hotel"
                    fill
                    sizes='full'
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex flex-col justify-end p-12 text-white z-10">
                    <h1 className="text-4xl font-bold mb-4">
                        Create Your Luxury Escape
                    </h1>
                    <p className="text-lg text-gray-200 max-w-md">
                        Join us to unlock exclusive stays, premium comfort, and unforgettable experiences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;