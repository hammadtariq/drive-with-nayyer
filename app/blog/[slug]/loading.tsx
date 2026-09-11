export default function Loading() {
  return (
    <div className="bg-bg px-5 pt-32 pb-20 sm:px-8">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="h-4 w-28 bg-primary/30" />
        <div className="mt-7 h-14 max-w-2xl bg-primary/25 md:h-20" />
        <div className="mt-5 h-5 max-w-xl bg-primary/20" />
        <div className="mt-10 h-[330px] bg-surface md:h-[520px]" />
      </div>
    </div>
  );
}
