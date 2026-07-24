import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';
import { CalendarDays, User, Church } from 'lucide-react';

const typeLabels: Record<SacramentMeeting['meetingType'], string> = {
  regular: 'Regular Sacrament Meeting',
  testimony: 'Fast & Testimony Meeting',
  stake: 'Stake Meeting',
  general: 'General Conference',
  special: 'Special Meeting',
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
        <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
          <CalendarDays className="h-5 w-5 text-blue-600" aria-hidden="true" />
          {formattedDate}
        </h2>
        <span className="flex items-center gap-1 whitespace-nowrap rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          <Church className="h-3.5 w-3.5" aria-hidden="true" />
          {typeLabels[meeting.meetingType]}
        </span>
      </div>

      <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
        <User className="h-4 w-4 text-slate-400" aria-hidden="true" />
        Presiding: {meeting.presiding} &middot; Conducting: {meeting.conducting}
      </p>

      {speakerNames && (
        <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
          <User className="h-4 w-4 text-slate-400" aria-hidden="true" />
          Speakers: {speakerNames}
        </p>
      )}
    </Link>
  );
}