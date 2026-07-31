import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold text-slate-900">
            Sacrament Meeting Planner
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Organize sacrament meetings by planning hymns, prayers,
            announcements, speakers, and ward business in one convenient place.
          </p>

          <div className="mt-8">
            <Link
              href="/meetings"
              className="inline-flex items-center rounded-lg bg-blue-950 px-6 py-3 text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800"
              >
              View Meetings
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/meeting.webp"
            alt="Members attending a sacrament meeting"
            width={700}
            height={500}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>
    </main>
  );
}