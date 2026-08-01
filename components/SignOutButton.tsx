import { signOut } from '@/auth';

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/' });
      }}
    >
      <button
        type="submit"
        className="text-sm font-medium text-slate-200 hover:text-blue-300"
      >
        Sign Out
      </button>
    </form>
  );
}