import { z } from "zod";

export const registerSchema = z
    .object({
        image: z
            .any()
            .refine((file) => file?.length === 1, "Profile image is required"),

        name: z
            .string()
            .min(2, "Username must be at least 2 characters"),

        email: z
            .string()
            .email("Invalid email address"),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[A-Z]/, "Must contain one uppercase letter")
            .regex(/[a-z]/, "Must contain one lowercase letter")
            .regex(/[0-9]/, "Must contain one number"),

        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type RegisterType = z.infer<typeof registerSchema>;
