"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-slate-900 text-white print:hidden">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* Left side - Name */}
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold hover:text-blue-300"
        >
          <Image
            src="/nompilo.webp"
            alt="Nompilo Ngwenya"
            width={40}
            height={40}
            style={{ width: 'auto', height: 'auto' }}
            className="rounded-full object-cover"
          />

          <span>Pretoria East Ward</span>
        </Link>

        {/* Right side - Navigation */}
        <div className="flex gap-6">
          <Link
            href="/"
            className={`hover:text-blue-300 ${
              pathname === "/"
                ? "font-bold text-white underline underline-offset-4"
                : "text-slate-200"
            }`}
          >
            Home
          </Link>

          <Link
            href="/meetings"
            className={`hover:text-blue-300 ${
              pathname.startsWith("/meetings") && pathname !== "/meetings/current"
                ? "font-bold text-white underline underline-offset-4"
                : "text-slate-200"
            }`}
          >
            Meetings
          </Link>
        </div>
      </nav>
    </header>
  );
}