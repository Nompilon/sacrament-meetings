export default function MeetingsLoading() {
  return (
    <div className="space-y-4" role="status" aria-label="Loading meetings">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-24 animate-pulse rounded-lg bg-slate-200" />
      ))}
    </div>
  );
}