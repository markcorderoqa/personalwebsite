import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="mb-2 text-sm font-semibold text-brand-300">404</p>
      <h1 className="mb-4 text-2xl font-semibold text-slate-50">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-sm text-slate-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-full bg-gradient-to-r from-brand-500 to-sky-500 px-5 py-2 text-xs font-semibold text-white shadow-[0_12px_32px_rgba(54,86,245,0.35)] transition hover:brightness-110"
      >
        Back to home
      </Link>
    </main>
  );
}
