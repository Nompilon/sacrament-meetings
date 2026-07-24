import type { SacramentMeeting } from '@/lib/types';
import {
  CalendarDays,
  Church,
  User,
  Megaphone,
  Music,
  Mic,
  HandHelping,
  HeartHandshake,
} from "lucide-react";

const typeLabels: Record<SacramentMeeting['meetingType'], string> = {
  regular: 'Regular Sacrament Meeting',
  testimony: 'Fast & Testimony Meeting',
  stake: 'Stake Meeting',
  general: 'General Conference',
  special: 'Special Meeting',
};

function ProgramRow({
  label,
  value,
  icon: Icon,
  iconColor = "text-slate-400",
}: {
  label: string;
  value: string;
  icon: React.ElementType;
  iconColor?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
      <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 sm:w-40 sm:shrink-0">
        <Icon className={`h-4 w-4 ${iconColor}`} aria-hidden="true" />
        {label}
      </span>
      <span className="text-slate-800">{value}</span>
    </div>
  );
}

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  const formattedDate = new Date(`${meeting.date}T00:00:00`).toLocaleDateString(
    'en-US',
    { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
  );

  return (
    <article className="mx-auto max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm print:border-none print:shadow-none">
      <header className="mb-6 border-b border-slate-200 pb-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Sacrament Meeting Program</h2>
        <p className="mt-1 flex items-center justify-center gap-1.5 text-slate-600">
          <CalendarDays className="h-4 w-4 text-blue-500" aria-hidden="true" />
          {formattedDate}
        </p>
        <p className="mt-1 flex items-center justify-center gap-1.5 text-sm font-medium text-blue-700">
          <Church className="h-4 w-4 text-indigo-600" aria-hidden="true" />
          {typeLabels[meeting.meetingType]}
        </p>
      </header>

      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <dt className="flex items-center gap-1.5 text-sm font-semibold text-slate-500">
            <User className="h-4 w-4 text-teal-600" aria-hidden="true" />
            Presiding
          </dt>
          <dd className="text-slate-800">{meeting.presiding}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 text-sm font-semibold text-slate-500">
            <User className="h-4 w-4 text-teal-600" aria-hidden="true" />
            Conducting
          </dt>
          <dd className="text-slate-800">{meeting.conducting}</dd>
        </div>
      </dl>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <section className="mt-6">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-slate-500">
            <Megaphone className="h-4 w-4 text-amber-500" aria-hidden="true" />
            Announcements
          </h3>
          <ul className="mt-2 list-inside list-disc text-slate-800">
            {meeting.announcements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-6 space-y-3">
        <ProgramRow
          label="Opening Hymn"
          value={`#${meeting.openingHymn.number} — ${meeting.openingHymn.title}`}
          icon={Music}
          iconColor="text-purple-500"
        />
        <ProgramRow
          label="Opening Prayer"
          value={meeting.openingPrayer}
          icon={HeartHandshake}
          iconColor="text-rose-500"
        />

        {meeting.wardBusiness.length > 0 && (
          <div>
            <h3 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-slate-500">
              <HandHelping className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              Ward Business
            </h3>
            <ul className="mt-1 list-inside list-disc text-slate-800">
              {meeting.wardBusiness.map((item, i) => (
                <li key={i}>{item.description}</li>
              ))}
            </ul>
          </div>
        )}

        {meeting.stakeBusiness && (
          <p className="flex items-center gap-1.5 text-slate-800">
            <HandHelping className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            <span className="font-semibold">Stake Business:</span> Yes
          </p>
        )}

        <ProgramRow
          label="Sacrament Hymn"
          value={`#${meeting.sacramentHymn.number} — ${meeting.sacramentHymn.title}`}
          icon={Music}
          iconColor="text-purple-500"
        />

        {meeting.speakers.length > 0 && (
          <div>
            <h3 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-slate-500">
              <Mic className="h-4 w-4 text-orange-500" aria-hidden="true" />
              Speakers &amp; Musical Numbers
            </h3>
            <ol className="mt-1 list-inside list-decimal text-slate-800">
              {meeting.speakers.map((s, i) => (
                <li key={i}>
                  {s.type === 'musical-number'
                    ? `Musical Number — ${s.name}`
                    : `${s.name}${s.topic ? ` — ${s.topic}` : ''}`}
                </li>
              ))}
            </ol>
          </div>
        )}

        <ProgramRow
          label="Closing Hymn"
          value={`#${meeting.closingHymn.number} — ${meeting.closingHymn.title}`}
          icon={Music}
          iconColor="text-purple-500"
        />
        <ProgramRow
          label="Closing Prayer"
          value={meeting.closingPrayer}
          icon={HeartHandshake}
          iconColor="text-rose-500"
        />
      </section>
    </article>
  );
}