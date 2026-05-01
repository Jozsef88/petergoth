const expectations = [
  "Kapcsolatfelvétel és igényfelmérés",
  "Állapotfelmérés és célkitűzés",
  "Testtartás és mozgásminták elemzése",
  "Személyre szabott edzésterv készítése",
  "Közös edzések és folyamatos visszajelzés",
];

export default function WhatToExpect() {
  return (
    <section className="section" id="what-to-expect">
      <div className="section-shell">
        <div className="glass card edge-glint fade-in-up fade-in-delay-1 relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--accent)]">Mire számíthatsz?</h2>

          <ul className="expectations-chain mt-6 grid gap-6">
            {expectations.map((item, index) => {
              return (
                <li key={item} className="step card rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-base text-[var(--text-main)] sm:text-lg">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
