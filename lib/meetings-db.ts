import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-07-05',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: [
      'Ward temple night: May 10',
      'Primary program practice moved to Wednesday',
    ],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' },
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
  },
  {
    id: 2,
    date: '2026-07-12',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: [
      'Fast and Testimony Meeting',
      'Youth activity Wednesday at 7pm',
    ],
    openingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
    openingPrayer: 'Brother Lee',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: "'Tis Sweet to Sing the Matchless Love" },
    speakers: [],
    closingHymn: { number: 219, title: 'God Be with You Till We Meet Again' },
    closingPrayer: 'Sister Garcia',
  },
  {
    id: 3,
    date: '2026-07-19',
    meetingType: 'stake',
    presiding: 'President Adams',
    conducting: 'President Adams',
    announcements: ['Combined stake conference session'],
    openingHymn: { number: 1, title: 'The Morning Breaks' },
    openingPrayer: 'Elder Nguyen',
    wardBusiness: [
      { description: 'Stake calling sustained: new Young Men president' },
    ],
    stakeBusiness: true,
    sacramentHymn: { number: 181, title: 'O Thou Before the World Began' },
    speakers: [
      { name: 'Elder Thompson (Area Seventy)', topic: 'Ministering', type: 'speaker' },
    ],
    closingHymn: { number: 249, title: 'Called to Serve' },
    closingPrayer: 'Sister Kim',
  },
  {
    id: 4,
    date: '2026-07-26',
    meetingType: 'general',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: ['General Conference broadcast viewing in the chapel'],
    openingHymn: { number: 227, title: 'Sweet Hour of Prayer' },
    openingPrayer: 'Brother Diaz',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: "'Tis Sweet to Sing the Matchless Love" },
    speakers: [],
    closingHymn: { number: 5, title: 'High on the Mountain Top' },
    closingPrayer: 'Sister Patel',
  },
  {
    id: 5,
    date: '2026-08-02',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: [
      'Ward campout June 6-7',
      'Missionary farewell for Elder Harris',
    ],
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Sister Chen',
    wardBusiness: [
      { description: 'Release and sustaining of Relief Society counselor' },
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'While of These Emblems We Partake' },
    speakers: [
      { name: 'Elder Harris', topic: 'Missionary farewell', type: 'speaker' },
      { name: 'Ward Choir', topic: '', type: 'musical-number' },
      { name: 'Brother Harris', topic: 'Supporting a missionary son', type: 'speaker' },
    ],
    closingHymn: { number: 292, title: 'Called to Serve' },
    closingPrayer: 'Brother Kim',
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  const sorted = [...meetings].sort((a, b) => a.date.localeCompare(b.date));
  if (date) return sorted.filter((m) => m.date === date);
  return sorted;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((m) => m.id === id) ?? null;
}