import Link from 'next/link';

export default function MeetingNotFound() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-xl font-semibold text-slate-800">Meeting Not Found</h2>
      <p className="mt-2 text-slate-600">We couldn&apos;t find a meeting with that ID.</p>
      <Link href="/meetings" className="mt-4 inline-block text-blue-700 underline">
        Back to all meetings
      </Link>
    </div>
  );
}