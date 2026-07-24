import { redirect } from 'next/navigation';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

function getMostRecentSunday(): string {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  return sunday.toISOString().split('T')[0];
}

export default async function CurrentMeetingPage() {
  const sundayDate = getMostRecentSunday();

  const rows = await sql`
    SELECT id FROM meetings WHERE date = ${sundayDate}
  `;

  if (rows.length === 0) {
    redirect('/meetings');
  }

  redirect(`/meetings/${rows[0].id}`);
}