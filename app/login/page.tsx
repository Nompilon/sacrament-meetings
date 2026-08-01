'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/auth-actions';

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <div className="mx-auto max-w-sm py-16">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">Bishopric Login</h1>

      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-describedby="form-error"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            aria-describedby="form-error"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </div>

        <div id="form-error" aria-live="polite" className="text-sm text-red-600">
          {errorMessage && <p>{errorMessage}</p>}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-md bg-blue-800 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900 disabled:opacity-50"
        >
          {isPending ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}