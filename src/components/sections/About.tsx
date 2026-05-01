import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faAward,
  faDroplet,
  faPersonCircleCheck,
  faPersonRunning,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const points = [
  {
    title: "színházi háttér",
    description: "tánc, akrobatika",
    icon: faPersonRunning,
  },
  {
    title: "5+ év tapasztalat",
    description: "egészségfókuszú edzés",
    icon: faAward,
  },
  {
    title: "félelem nélkül",
    description: "segít azoknak, akik félnek a mozgástól",
    icon: faPersonCircleCheck,
  },
  {
    title: "életmódorvostan",
    description: "konferenciák és továbbképzések",
    icon: faUserGraduate,
  },
  {
    title: "vízitorna",
    description: "orvosoknak és dietetikusoknak",
    icon: faDroplet,
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-shell relative">
        {/* Desktop: kép kívül a kártyán */}
        <div className="pointer-events-none absolute right-[-96px] top-[20px] z-20 hidden w-full max-w-[330px] lg:block lg:right-[-130px] lg:top-auto lg:bottom-0 lg:max-w-[430px]">
          <div className="pointer-events-none absolute -bottom-4 -left-8 h-40 w-52 rounded-full bg-[radial-gradient(circle,rgba(70,255,170,0.34),transparent_72%)] blur-2xl" />
          <Image
            src="/aboutme4.png"
            alt="Göth Péter"
            width={620}
            height={760}
            priority={false}
            className="relative z-10 h-auto w-full object-contain"
          />
        </div>

        <div className="glass card edge-glint fade-in-up fade-in-delay-2 relative overflow-hidden rounded-[28px] border border-[rgba(80,255,180,0.18)] px-6 py-8 sm:px-8 sm:py-10 lg:max-w-[920px] lg:overflow-hidden lg:px-12 lg:py-12">
          {/* Mobile: kép belül a kártyán, szöveg mögött */}
          <div className="pointer-events-none absolute right-[-90px] top-3 z-0 w-full max-w-[300px] opacity-80 sm:right-[-60px] sm:max-w-[340px] lg:hidden">
            <Image
              src="/aboutme4.png"
              alt=""
              aria-hidden="true"
              width={620}
              height={760}
              priority={false}
              className="relative h-auto w-full object-contain"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_75%_at_80%_36%,rgba(40,200,140,0.14),transparent_72%)]" />

          <div className="relative z-10 lg:max-w-none">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--accent)]">Rólam</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Göth Péter</h2>
            <p className="mt-2 text-xl text-[#b8c3cf] sm:text-2xl">személyi edző és aqua trainer</p>

            <p className="mt-8 text-lg leading-relaxed text-[#c7d2dc] lg:max-w-[780px]">
              Szenvedéllyel segítek azoknak, akik készek tenni az egészségükért és kihozni magukból a maximumot.
              Edzéseim célja, hogy hosszú távon fenntartható, egészséges életmódot alakítsunk ki együtt.
            </p>

            <div className="mt-7 h-px w-20 bg-[linear-gradient(90deg,rgba(90,255,180,0.9),rgba(90,255,180,0.05))]" />

            <ul className="relative z-10 mt-7 grid gap-4 text-[var(--text-main)] sm:grid-cols-2">
              {points.map((point, index) => (
                <li
                  key={point.title}
                  className={`card flex items-center gap-4 rounded-2xl border border-[rgba(90,255,180,0.16)] bg-[rgba(5,12,16,0.66)] px-5 py-4 shadow-[inset_0_0_0_1px_rgba(80,255,180,0.05)] backdrop-blur-sm ${index === points.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <span className="text-[2rem] leading-none text-[var(--accent)]">
                    <FontAwesomeIcon icon={point.icon} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-base font-medium leading-tight text-white sm:text-[1.15rem]">{point.title}</span>
                    <span className="mt-1 block text-sm text-[#94a8b7] sm:text-base">{point.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
