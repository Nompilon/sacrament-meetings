'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/meetings', label: 'All Meetings' },
  { href: '/meetings/current', label: 'This Sunday' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="print:hidden" aria-label="Main navigation">
      <ul className="flex gap-4">
        {links.map((link) => {
          const isActive =
            link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isActive
                    ? 'font-semibold text-blue-700 underline underline-offset-4'
                    : 'text-slate-600 hover:text-blue-700'
                }
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}