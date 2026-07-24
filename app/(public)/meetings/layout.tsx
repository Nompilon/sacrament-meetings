import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6 border-b border-slate-200 pb-4">
        <NavLinks />
      </div>
      {children}
    </div>
  );
}