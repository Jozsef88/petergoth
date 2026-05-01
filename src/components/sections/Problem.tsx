export default function Problem() {
  return (
    <section className="section relative z-10" id="problem">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 md:top-0 md:z-0 md:h-[30px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5, 7, 10, 0.98) 0%, rgba(5, 7, 10, 0.76) 34%, rgba(5, 7, 10, 0.28) 70%, rgba(5, 7, 10, 0) 100%)",
        }}
      />
      <div className="section-shell">
        <div className="glass card edge-glint highlight-box fade-in-up fade-in-delay-1 relative z-10">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--text-dim)]">Röviden</p>
          <h2 className="relative z-10 text-2xl mt-2 font-semibold tracking-tight sm:text-3xl">
            Nem a széthajtás a cél
          </h2>
          <p className="relative z-10 mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-dim)] sm:text-lg">
            A legtöbben nem lusták, hanem bizonytalanok: fájdalomtól tartanak,
            rossz élményeik voltak, vagy egyszerűen nem kaptak biztonságos,
            személyre szabott útmutatást.
          </p>
          <p className="relative z-10 mt-6 text-base font-medium leading-relaxed text-[var(--accent)] sm:text-lg">
            Velem nem fogsz megszakadni — hanem megtanulod helyesen használni a tested.
          </p>
        </div>
      </div>
    </section>
  );
}
