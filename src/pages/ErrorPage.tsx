import { useRouteError, Link } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string } | undefined;
  console.error(error);
  // throw new Error('testing error');

  return (
    <div className="bg-dark-primary text-dark-text-default min-h-screen">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-dark-text-highlight">
          Oops!
        </h1>
        <p className="mt-4 leading-relaxed">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="mt-2 text-sm italic text-dark-text-dark">
          {error ? error.statusText || error.message : `Unknown error`}
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 font-semibold text-accent hover:text-dark-text-highlight transition-colors"
        >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3 shrink-0" aria-hidden="true">
            <line x1="0" y1="24" x2="24" y2="0" strokeWidth="3"/> {/* base */}
            {/* tip, to account for rendering fuckery stroke width = base strokeWidth * sqrt(2) */}
            <line x1="6" y1="0" x2="24" y2="0" strokeWidth="4.24" />
            <line x1="24" y1="18" x2="24" y2="0"strokeWidth="4.24"/>
        </svg>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
