import { redirect } from 'next/navigation';
import { getMeetings } from '@/lib/meetings-db';

function getMostRecentSunday(): string {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sun) through 6 (Sat)
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  return sunday.toISOString().split('T')[0];
}

export default function CurrentMeetingPage() {
  const sundayDate = getMostRecentSunday();
  const matches = getMeetings(sundayDate);

  if (matches.length === 0) {
    redirect('/meetings');
  }

  redirect(`/meetings/${matches[0].id}`);
}