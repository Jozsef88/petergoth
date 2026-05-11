import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="section-shell">
        <div className="glass form-box card edge-glint fade-in-up fade-in-delay-2 relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--accent)]">ÁRAK &amp; BÉRLETEK</p>

          <p className="relative z-10 mt-3 max-w-2xl text-[var(--text-dim)]">Rugalmas bérletopciók, amelyek illeszkednek az időbeosztásodhoz és céljaidhoz. Minden bérlet tartalmaz egy ingyenes konzultációt és állapotfelmérést.</p>

          <div className="relative z-10 mt-7 grid gap-4 sm:grid-cols-2">
            <div className="feature-card relative z-10">
              <h3 className="font-semibold text-lg">Személyi edzés</h3>
              <ul className="mt-3 space-y-3">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between rounded-md border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
                  <div className="min-w-0">
                    <div className="text-sm text-[var(--text-dim)]">5 alkalmas bérlet</div>
                    <div className="mt-1 text-[11px] text-[rgba(170,195,200,0.7)] sm:mt-0">(30 napig felhasználható)</div>
                  </div>
                  <span className="mt-3 sm:mt-0 ml-auto sm:ml-4 inline-flex items-center justify-center rounded-md bg-[rgba(85,196,147,0.06)] px-3 py-1 font-semibold text-[13px] whitespace-nowrap flex-shrink-0" style={{ color: "#7EF1BD" }}>50.000,- Ft</span>
                </li>

                <li className="flex flex-col sm:flex-row sm:items-center justify-between rounded-md border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
                  <div className="min-w-0">
                    <div className="text-sm text-[var(--text-dim)]">10 alkalmas bérlet</div>
                    <div className="mt-1 text-[11px] text-[rgba(170,195,200,0.7)] sm:mt-0">(45 napig felhasználható)</div>
                  </div>
                  <span className="mt-3 sm:mt-0 ml-auto sm:ml-4 inline-flex items-center justify-center rounded-md bg-[rgba(85,196,147,0.06)] px-3 py-1 font-semibold text-[13px] whitespace-nowrap flex-shrink-0" style={{ color: "#7EF1BD" }}>70.000,- Ft</span>
                </li>

                <li className="flex flex-col sm:flex-row sm:items-center justify-between rounded-md border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
                  <div className="min-w-0">
                    <div className="text-sm text-[var(--text-dim)]">20 alkalmas bérlet</div>
                    <div className="mt-1 text-[11px] text-[rgba(170,195,200,0.7)] sm:mt-0">(60 napig felhasználható)</div>
                  </div>
                  <span className="mt-3 sm:mt-0 ml-auto sm:ml-4 inline-flex items-center justify-center rounded-md bg-[rgba(85,196,147,0.06)] px-3 py-1 font-semibold text-[13px] whitespace-nowrap flex-shrink-0" style={{ color: "#7EF1BD" }}>120.000,- Ft</span>
                </li>
              </ul>
            </div>

            <div className="feature-card relative z-10">
              <h3 className="font-semibold text-lg">Páros edzés</h3>
              <ul className="mt-3 space-y-3">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between rounded-md border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
                  <div className="min-w-0">
                    <div className="text-sm text-[var(--text-dim)]">5 alkalmas bérlet</div>
                    <div className="mt-1 text-[11px] text-[rgba(170,195,200,0.7)] sm:mt-0">(30 napig felhasználható)</div>
                  </div>
                  <span className="mt-3 sm:mt-0 ml-auto sm:ml-4 inline-flex items-center justify-center rounded-md bg-[rgba(85,196,147,0.06)] px-3 py-1 font-semibold text-[13px] whitespace-nowrap flex-shrink-0" style={{ color: "#7EF1BD" }}>70.000,- Ft</span>
                </li>

                <li className="flex flex-col sm:flex-row sm:items-center justify-between rounded-md border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
                  <div className="min-w-0">
                    <div className="text-sm text-[var(--text-dim)]">10 alkalmas bérlet</div>
                    <div className="mt-1 text-[11px] text-[rgba(170,195,200,0.7)] sm:mt-0">(45 napig felhasználható)</div>
                  </div>
                  <span className="mt-3 sm:mt-0 ml-auto sm:ml-4 inline-flex items-center justify-center rounded-md bg-[rgba(85,196,147,0.06)] px-3 py-1 font-semibold text-[13px] whitespace-nowrap flex-shrink-0" style={{ color: "#7EF1BD" }}>90.000,- Ft</span>
                </li>

                <li className="flex flex-col sm:flex-row sm:items-center justify-between rounded-md border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
                  <div className="min-w-0">
                    <div className="text-sm text-[var(--text-dim)]">20 alkalmas bérlet</div>
                    <div className="mt-1 text-[11px] text-[rgba(170,195,200,0.7)] sm:mt-0">(60 napig felhasználható)</div>
                  </div>
                  <span className="mt-3 sm:mt-0 ml-auto sm:ml-4 inline-flex items-center justify-center rounded-md bg-[rgba(85,196,147,0.06)] px-3 py-1 font-semibold text-[13px] whitespace-nowrap flex-shrink-0" style={{ color: "#7EF1BD" }}>140.000,- Ft</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative z-10 mt-7 flex items-start gap-4 text-xs text-[var(--text-dim)]">
            <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(255,255,255,0.03)] bg-[rgba(85,196,147,0.04)] text-[#6ef2b2]">
              <FontAwesomeIcon icon={faCalendarDays} className="text-[18px]" aria-hidden />
            </span>

            <p className="max-w-2xl">Az alkalmak személyi edzésre szólnak. Az edzőterembe való belépéshez napijegyet vagy bérletet kell vásárolni a recepción. A bérletek át nem ruházhatóak. Az alkalmakat a meghatározott időn belül kell felhasználni. A bérletek étrendet nem tartalmaznak. Igény esetén személyre szabottan kérhető.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
