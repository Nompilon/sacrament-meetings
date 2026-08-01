import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        const rows = await sql`
          SELECT id, email, password, name FROM users WHERE email = ${credentials.email}
        `;
        const user = rows[0];

        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!passwordsMatch) return null;

        return { id: String(user.id), email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith('/meetings/new') ||
                         nextUrl.pathname.startsWith('/meetings') && nextUrl.pathname.includes('/edit');
      if (isOnAdmin) {
        return isLoggedIn;
      }
      return true;
    },
  },
});