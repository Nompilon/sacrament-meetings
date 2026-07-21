export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 print:hidden">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Sacrament Meeting Planner
      </div>
    </footer>
  );
}