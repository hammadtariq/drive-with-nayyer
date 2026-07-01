const signalsBeforeReviews = [
  "Women-only lessons",
  "MTO Certified Instructor",
  "G2 & G Training",
  "English · Urdu · Hindi",
];

const signalsAfterReviews = ["Mississauga · Oakville · Burlington · Milton"];

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M2.5 6.5l3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58Z"
      />
    </svg>
  );
}

export function TrustBar() {
  return (
    <div className="border-b border-primary/10 bg-bg">
      <div
        className="flex gap-2.5 px-5 sm:px-8 py-4 overflow-x-auto scrollbar-none snap-x snap-mandatory sm:justify-center sm:flex-wrap"
        role="list"
        aria-label="Service highlights"
      >
        {signalsBeforeReviews.map((s) => (
          <div
            key={s}
            role="listitem"
            className="flex-none snap-start inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary-pale text-primary-deep text-sm font-body font-semibold whitespace-nowrap"
          >
            <Check />
            {s}
          </div>
        ))}
        <a
          href="https://share.google/ZtFJN7vv0q9oZPRgT"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          className="flex-none snap-start inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary-pale text-primary-deep text-sm font-body font-semibold whitespace-nowrap hover:bg-primary/25 hover:border-primary/35 transition-colors duration-200"
        >
          <GoogleIcon />
          Reviewed on Google
        </a>
        {signalsAfterReviews.map((s) => (
          <div
            key={s}
            role="listitem"
            className="flex-none snap-start inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary-pale text-primary-deep text-sm font-body font-semibold whitespace-nowrap"
          >
            <Check />
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
