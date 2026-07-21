import MeetingCard from '@/components/MeetingCard';
import { getBaseUrl } from '@/lib/utils';
import type { SacramentMeeting } from '@/lib/types';

export default async function MeetingsPage() {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/meetings`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to load meetings');
  }

  const meetings: SacramentMeeting[] = await res.json();

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-slate-800">All Sacrament Meetings</h2>
      <div className="grid gap-4">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
}