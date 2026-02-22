import CredentialsProvider from "next-auth/providers/credentials"

export const authOption = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (!credentials) return null;
                return null;
            }
        }),
    ],

}