const signals = [
  "Women-only lessons",
  "MTO Certified Instructor",
  "G2 & G Training",
  "English · Urdu · Hindi",
  "Pickup & Drop-off",
  "Mississauga, Ontario",
];

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

export function TrustBar() {
  return (
    <div className="border-b border-primary/10 bg-bg">
      <div
        className="flex gap-2.5 px-5 sm:px-8 py-4 overflow-x-auto scrollbar-none snap-x snap-mandatory sm:justify-center sm:flex-wrap"
        role="list"
        aria-label="Service highlights"
      >
        {signals.map((s) => (
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
