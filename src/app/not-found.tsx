import Link from "next/link";

export const metadata = {
  title: "404 — Page not found",
};

export default function NotFound() {
  return (
    <main className="grid min-h-[80vh] place-items-center px-6">
      <div className="card max-w-md rounded-3xl p-10 text-center sm:p-14">
        <span className="eyebrow">{"// 404"}</span>
        <h1 className="grad-text mt-6 font-display text-5xl font-semibold sm:text-6xl">
          Lost the thread
        </h1>
        <p className="mt-4 text-muted">
          This page took a wrong turn in the pipeline. Let&apos;s get you back to
          safety.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back home
        </Link>
      </div>
    </main>
  );
}
