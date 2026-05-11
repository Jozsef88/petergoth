import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import MapBox from "../MapBox";

export default function Contact() {
  const hasMapKey = Boolean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  return (
    <section className="section mx-2" id="contact">
      <div className="section-shell">
        <div className="relative z-10 grid gap-8 lg:grid-cols-12">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6">
            <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--accent)]">Kapcsolat</h3>

            <p className="mt-3 max-w-2xl text-[var(--text-dim)]">Kérdésed van, vagy szeretnél időpontot egyeztetni? Vedd fel velem a kapcsolatot az alábbi elérhetőségeimen!</p>

            <div className="mt-6 space-y-4">
              {/* Phone */}
              <a href="tel:+36308519156" className="group block rounded-2xl border border-[rgba(255,255,255,0.04)] bg-[rgba(7,14,18,0.6)] p-4 transition hover:shadow-[0_12px_34px_rgba(0,0,0,0.6)]">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} style={{ color: '#6ef2b2', height: '1.5rem', width: '1.5rem' }} />
                  <div className="ml-3">
                    <div className="text-[11px] uppercase text-[var(--text-dim)]" style={{ color: '#6ef2b2' }}>Telefon</div>
                    <div className="text-white font-semibold">+36 30 851 9156</div>
                  </div>
                </div>
              </a>

              {/* Address */}
              <a href="https://arnoldgym.hu/" target="_blank" rel="noreferrer" className="group block rounded-2xl border border-[rgba(255,255,255,0.04)] bg-[rgba(7,14,18,0.6)] p-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faLocationDot} style={{ color: '#6ef2b2', height: '1.5rem', width: '1.5rem' }} />
                  <div className="ml-3">
                    <div className="text-[11px] uppercase text-[var(--text-dim)]" style={{ color: '#6ef2b2' }}>Edzőterem weboldala</div>
                    <div className="text-white font-semibold">Arnold Gym</div>
                  </div>
                </div>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/peter.goth.5" target="_blank" rel="noreferrer" className="group block rounded-2xl border border-[rgba(255,255,255,0.04)] bg-[rgba(7,14,18,0.6)] p-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faFacebookF} style={{ color: '#6ef2b2', height: '1.5rem', width: '1.5rem' }} />
                  <div className="ml-3">
                    <div className="text-[11px] uppercase text-[var(--text-dim)]" style={{ color: '#6ef2b2' }}>Facebook</div>
                    <div className="text-white font-semibold">peter.goth.5</div>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/peter.goth.5" target="_blank" rel="noreferrer" className="group block rounded-2xl border border-[rgba(255,255,255,0.04)] bg-[rgba(7,14,18,0.6)] p-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faInstagram} style={{ color: '#6ef2b2', height: '1.5rem', width: '1.5rem' }} />
                  <div className="ml-3">
                    <div className="text-[11px] uppercase text-[var(--text-dim)]" style={{ color: '#6ef2b2' }}>Instagram</div>
                    <div className="text-white font-semibold">peter.goth.5</div>
                  </div>
                </div>
              </a>

              {/* Appointment bar */}
                <a
                  href="https://foglaljbe.vercel.app/"
                  className="flex w-full items-center justify-center gap-3 rounded-[14px] bg-[#55C493] px-6 py-4 text-sm font-semibold tracking-[0.08em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(85,196,147,0.6)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  FOGLALOK!
                </a>
            </div>
          </div>

          {/* RIGHT COLUMN (MAP) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] overflow-hidden bg-[rgba(5,8,10,0.6)] h-full">
              {hasMapKey ? (
                <MapBox lat={47.52807069316719} lng={19.0361197393976} zoom={16} height={420} />
              ) : (
                <iframe
                  title="Arnold Gym térkép"
                  src="https://maps.google.com/maps?q=47.52807069316719,19.0361197393976&z=16&output=embed"
                  className="w-full h-[420px] map-embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}

              {/* bottom info (smaller on mobile) */}
              <div className="absolute left-2 bottom-2 flex items-center gap-3 rounded-lg bg-[rgba(6,12,14,0.6)] border border-[rgba(255,255,255,0.04)] p-2 md:left-6 md:bottom-6 md:gap-4 md:rounded-2xl md:p-4">
                <Image
                  src="/gp.png"
                  alt="GP"
                  width={30}
                  height={30}
                  className="rounded-sm h-10 w-10 md:h-[52px] md:w-[52px] object-cover"
                  style={{ width: "auto", height: "auto" }}
                />
                <div>
                  <div className="text-[10px] md:text-[12px] font-semibold text-[var(--accent)]">ARNOLD GYM</div>
                  <div className="text-[8px] md:text-[10px] text-[var(--text-dim)]">1037 Budapest, Bécsi út 234.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[#4B5563]">&copy; {new Date().getFullYear()} Göth Péter. Minden jog fenntartva.</p>
      </div>
    </section>
  );
}
