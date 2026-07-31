import Link from 'next/link';

export default function EditNotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <h2 className="text-xl font-semibold text-slate-800">Meeting Not Found</h2>
      <p className="mt-2 text-slate-600">
        The meeting you&apos;re trying to edit doesn&apos;t exist.
      </p>
      <Link href="/meetings" className="mt-4 inline-block text-blue-700 underline">
        Back to all meetings
      </Link>
    </div>
  );
}