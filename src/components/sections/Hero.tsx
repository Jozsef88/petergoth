/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDown,
  faDumbbell,
  faMedal,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="relative z-20 isolate min-h-[100svh] bg-[#0B0B0B] text-white" id="top">
      <img
        src="/edzo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover [object-position:calc(100%+250px)_center] md:[object-position:center_center]"
      />

      <div className="relative z-30 mx-auto flex min-h-[100svh] w-full max-w-[1400px] items-center px-4 pb-14 pt-24 sm:px-6 md:px-16 lg:pt-24">
        <div className="w-full md:max-w-[54%]">
          <div className="inline-flex items-center gap-5 text-sm font-semibold tracking-[0.2em] text-[#55C493]">
            <span>EGÉSZSÉGFÓKUSZÚ EDZÉS</span>
            <span className="h-px w-14 bg-[#55C493]/70" />
          </div>

          <h1 className="mt-7 text-3xl font-bold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Hozd formába
            <span className="block text-[#55C493] drop-shadow-[0_0_30px_rgba(85,196,147,0.6)]">az egészséged!</span>
          </h1>

          <div className="mt-7 h-px w-16 bg-[#55C493]/70" />

          <p className="mt-7 max-w-xl text-sm leading-relaxed text-[#D1D5DB] sm:text-base">
            Nem megszakadni kell — hanem megtanulni helyesen használni a tested.
          </p>
          <p className="mt-3 text-sm text-[#9CA3AF] sm:text-base">
            Segítek azoknak, akiknek a mozgás eddig ijesztő volt.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <a
              href="https://foglaljbe.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-[14px] bg-[#55C493] px-8 py-4 text-sm font-semibold tracking-[0.08em] !text-[#000000] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(85,196,147,0.6)]"
            >
              IDŐPONT FOGLALÁS
            </a>


          </div>

          <div className="relative z-30 mt-6 flex items-center gap-0 md:mt-12 md:gap-0">
            <div className="flex flex-1 items-center gap-1.5 md:flex-none md:items-center md:gap-3 md:pr-8">
              <FontAwesomeIcon icon={faMedal} aria-hidden="true" className="shrink-0 text-[1.1rem] text-[#55C493]/90 md:text-[1.9rem]" />
              <div>
                <p className="text-[11px] font-bold leading-none text-[#55C493] md:text-[18px]">5+ ÉV</p>
                <p className="mt-0.5 text-[8px] uppercase tracking-[0.08em] text-[#9CA3AF] md:mt-1 md:text-[9px] md:tracking-[0.12em]">Tapasztalat</p>
              </div>
            </div>

            <div className="mx-2 h-8 w-px bg-white/12 md:mx-1 md:h-11" />

            <div className="flex flex-1 items-center gap-1.5 md:flex-none md:items-center md:gap-3 md:px-8">
              <FontAwesomeIcon icon={faUserGroup} aria-hidden="true" className="shrink-0 text-[1.1rem] text-[#55C493]/90 md:text-[1.9rem]" />
              <div>
                <p className="text-[11px] font-bold leading-none text-[#55C493] md:text-[18px]">PÁROS</p>
                <p className="mt-0.5 text-[8px] uppercase tracking-[0.08em] text-[#9CA3AF] md:mt-1 md:text-[9px] md:tracking-[0.12em]">Edzések</p>
              </div>
            </div>

            <div className="mx-2 h-8 w-px bg-white/12 md:mx-1 md:h-11" />

            <div className="flex flex-1 items-center gap-1.5 md:flex-none md:items-center md:gap-3 md:pl-8">
              <FontAwesomeIcon icon={faDumbbell} aria-hidden="true" className="shrink-0 text-[1.1rem] text-[#55C493]/90 md:text-[1.9rem]" />
              <div>
                <p className="text-[11px] font-bold leading-[0.95] text-[#55C493] md:text-[18px]">SZEMÉLYRE</p>
                <p className="mt-0.5 text-[8px] uppercase tracking-[0.08em] text-[#9CA3AF] md:mt-1 md:text-[9px] md:tracking-[0.12em]">Szabott terv</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#problem"
        aria-label="Görgess a következő szekcióra"
        className="absolute -bottom-5 left-1/2 z-[70] -translate-x-1/2 md:bottom-4 text-[#55C493] transition hover:scale-105"
      >
        <span className="relative flex items-center justify-center">
          <FontAwesomeIcon icon={faCircleDown} aria-hidden="true" className="text-[4rem]" />
        </span>
      </a>

      <div className="hero-bottom-fade" aria-hidden="true" />
      <svg className="hero-bottom-wave" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,82 C180,134 340,36 560,78 C760,114 910,150 1130,118 C1280,96 1368,58 1440,72 L1440,220 L0,220 Z"
          fill="var(--bg-main)"
        />
        <path
          d="M0,82 C180,134 340,36 560,78 C760,114 910,150 1130,118 C1280,96 1368,58 1440,72"
          fill="none"
          stroke="rgba(110, 242, 178, 0.5)"
          strokeWidth="1.6"
        />
      </svg>
    </section>
  );
}
