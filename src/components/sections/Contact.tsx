import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-shell">
        <div className="glass card edge-glint fade-in-up fade-in-delay-3 relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <h2 className="relative z-10 text-sm font-medium uppercase tracking-[0.12em] text-[var(--accent)]">Kapcsolat</h2>
          <div className="relative z-10 mt-6 grid gap-3 text-[var(--text-main)]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3 text-sm sm:text-base lg:grid-cols-5">
              <a className="inline-flex items-center gap-2 lg:justify-self-start" href="mailto:petergoth@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" className="text-[1.15rem] text-[var(--accent)]" />
                <span className="inline-block text-white">petergoth@gmail.com</span>
              </a>

              <a className="inline-flex items-center gap-2 lg:justify-self-center" href="tel:+36308519156">
                <FontAwesomeIcon icon={faPhone} aria-hidden="true" className="text-[1.15rem] text-[var(--accent)]" />
                <span className="inline-block text-white">+36308519156</span>
              </a>

              <a
                className="inline-flex items-center gap-2 lg:justify-self-center"
                href="https://arnoldgym.hu/edzoink"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" className="text-[1.15rem] text-[var(--accent)]" />
                <span className="inline-block text-white">Arnold Gym</span>
              </a>

              <a
                className="inline-flex items-center gap-2 lg:justify-self-center"
                href="https://www.facebook.com/peter.goth.5"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" className="text-[1.15rem] text-[var(--accent)]" />
                <span className="inline-block text-white">peter.goth.5</span>
              </a>

              <a
                className="inline-flex items-center gap-2 lg:justify-self-end"
                href="https://www.instagram.com/peter.goth.5"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" className="text-[1.15rem] text-[var(--accent)]" />
                <span className="inline-block text-white">peter.goth.5</span>
              </a>
            </div>

            <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <iframe
                title="Arnold Gym térkép"
                src="https://maps.google.com/maps?q=47.52807069316719,19.0361197393976&z=16&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-[#4B5563]">
          &copy; {new Date().getFullYear()} Göth Péter. Minden jog fenntartva.
        </p>
      </div>
    </section>
  );
}
