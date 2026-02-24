import { z } from "zod";

/* Forgot Password */
export const forgotPasswordSchema = z.object({
    email: z.string().email("Please enter a valid email"),
});

export type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;

/* Reset Password */
export const resetPasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, "Minimum 8 characters")
            .regex(/[A-Z]/, "Must contain one uppercase letter")
            .regex(/[a-z]/, "Must contain one lowercase letter")
            .regex(/[0-9]/, "Must contain one number"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;
