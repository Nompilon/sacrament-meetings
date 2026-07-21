import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

const typeLabels: Record<SacramentMeeting['meetingType'], string> = {
  regular: 'Regular Sacrament Meeting',
  testimony: 'Fast & Testimony Meeting',
  stake: 'Stake Meeting',
  general: 'General Conference',
};

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  const formattedDate = new Date(`${meeting.date}T00:00:00`).toLocaleDateString(
    'en-US',
    { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
  );

  const speakerNames = meeting.speakers
    .filter((s) => s.type === 'speaker')
    .map((s) => s.name)
    .join(', ');

  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-400 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-slate-800">{formattedDate}</h2>
        <span className="whitespace-nowrap rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          {typeLabels[meeting.meetingType]}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-500">
        Presiding: {meeting.presiding} &middot; Conducting: {meeting.conducting}
      </p>
      {speakerNames && (
        <p className="mt-1 text-sm text-slate-500">Speakers: {speakerNames}</p>
      )}
    </Link>
  );
}