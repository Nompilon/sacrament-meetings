import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import PrintButton from '@/components/PrintButton';
import { getBaseUrl } from '@/lib/utils';
import type { SacramentMeeting } from '@/lib/types';

export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/meetings/${id}`, { cache: 'no-store' });

  if (res.status === 404 || res.status === 400) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('Failed to load meeting');
  }

  const meeting: SacramentMeeting = await res.json();

  return (
    <div>
      <MeetingDetail meeting={meeting} />
      <div className="mt-6 flex justify-center">
        <PrintButton />
      </div>
    </div>
  );
}