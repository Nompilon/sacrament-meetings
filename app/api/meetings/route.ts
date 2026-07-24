import { NextRequest } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { getMeetings } from '@/lib/meetings-db';

const sql = neon(process.env.DATABASE_URL!);

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get('date');

  if (date) {
    const rows = await sql`
      SELECT
        id,
        to_char(date, 'YYYY-MM-DD') AS "date",
        meeting_type AS "meetingType",
        presiding, conducting, announcements,
        opening_hymn AS "openingHymn",
        opening_prayer AS "openingPrayer",
        ward_business AS "wardBusiness",
        stake_business AS "stakeBusiness",
        sacrament_hymn AS "sacramentHymn",
        speakers,
        closing_hymn AS "closingHymn",
        closing_prayer AS "closingPrayer"
      FROM meetings WHERE date = ${date}
    `;
    return Response.json(rows);
  }

  const meetings = await getMeetings();
  return Response.json(meetings);
}