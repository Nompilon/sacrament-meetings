export { auth as middleware } from '@/auth';

export const config = {
  matcher: ['/meetings/new', '/meetings/:id/edit'],
};