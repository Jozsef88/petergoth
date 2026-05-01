"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faClipboardList, faDumbbell, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion, useMotionTemplate, useScroll, useSpring, useTransform } from "framer-motion";

const navLinks = [
  { label: "RÓLAM", href: "#about" },
  { label: "MIRE SZÁMÍTHATSZ", href: "#what-to-expect" },
  { label: "JELENTKEZÉS", href: "#form" },
];

const mobileLinks = [
  { label: "Rólam", href: "#about", icon: faUser },
  { label: "Szolgáltatások", href: "#problem", icon: faDumbbell },
  { label: "Folyamat", href: "#what-to-expect", icon: faClipboardList },
  { label: "Kapcsolat", href: "#contact", icon: faEnvelope },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const blurProgress = useTransform(scrollY, [0, 180], [0, 1]);
  const smoothProgress = useSpring(blurProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.5,
  });

  const blurAmount = useTransform(smoothProgress, [0, 1], ["blur(0px)", "blur(22px)"]);
  const overlayOpacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const overlayColor = useTransform(smoothProgress, [0, 1], ["rgba(2, 7, 10, 0)", "rgba(2, 7, 10, 0.58)"]);
  const overlayBorder = useTransform(smoothProgress, [0, 1], ["rgba(255,255,255,0)", "rgba(255,255,255,0.14)"]);
  const overlayShadow = useMotionTemplate`0 14px 42px rgba(0, 0, 0, ${useTransform(smoothProgress, [0, 1], [0, 0.32])})`;

  return (
    <header className="fixed left-0 right-0 top-0 z-[70] bg-transparent">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: overlayOpacity,
          backdropFilter: blurAmount,
          WebkitBackdropFilter: blurAmount,
          backgroundColor: overlayColor,
          borderBottom: "1px solid",
          borderColor: overlayBorder,
          boxShadow: overlayShadow,
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:px-12 lg:px-14">

        {/* LOGO */}
        <Link href="#top" className="group flex items-center gap-2.5">
          <Image
            src="/gp.png"
            alt="Göth Péter márkalogó"
            width={76}
            height={44}
            priority
            className="h-[38px] w-auto opacity-95 transition duration-300 group-hover:opacity-100"
          />
          <span className="inline-flex w-max flex-col leading-none">
            <span className="block text-[18px] font-bold uppercase tracking-[0.03em] text-[#dce2e7]">
              GÖTH PÉTER
            </span>
            <span className="mt-1 block w-full text-[9px] font-medium uppercase tracking-[0.39em] text-[#aeb8c0]">
              SZEMÉLYI EDZŐ
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-9 md:flex lg:gap-11">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold tracking-[0.05em] transition hover:text-white"
              style={link.href === "#contact" ? { color: "#55C493" } : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="cta-black rounded-[14px] border border-[#55C493]/80 bg-[rgba(85,196,147,0.05)] px-8 py-3 text-[13px] font-semibold tracking-[0.04em] transition duration-300 hover:scale-[1.02]"
            style={{
              color: "#7EF1BD",
              borderColor: "rgba(126,241,189,0.85)",
              boxShadow: "0 0 0 1px rgba(126,241,189,0.22) inset, 0 0 16px rgba(96,224,167,0.28), 0 0 34px rgba(96,224,167,0.18)",
            }}
          >
            KAPCSOLAT
          </Link>
        </div>

        {/* MOBILE BURGER */}
        <button
          className={`relative z-[90] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(110,242,178,0.5)] bg-[rgba(12,20,24,0.86)] text-[#6ef2b2] shadow-[0_0_0_1px_rgba(110,242,178,0.18)_inset] transition md:hidden ${open
            ? "shadow-[0_0_0_1px_rgba(110,242,178,0.22)_inset,0_0_18px_rgba(45,190,130,0.25)]"
            : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
        >
          <span className={`absolute block h-[2px] w-5 bg-[#6ef2b2] transition-all ${open ? "rotate-45" : "-translate-y-[6px]"}`} />
          <span className={`absolute block h-[2px] w-5 bg-[#6ef2b2] transition-all ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute block h-[2px] w-5 bg-[#6ef2b2] transition-all ${open ? "-rotate-45" : "translate-y-[6px]"}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-[rgba(3,9,12,0.78)] p-3 backdrop-blur-[2px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="relative h-full w-full overflow-hidden rounded-[24px] border-[0.5px] border-[rgba(110,242,178,0.25)] bg-cover bg-center px-5 py-4 shadow-[0_16px_48px_rgba(2,8,9,0.62)]"
              style={{
                backgroundImage:
                  "linear-gradient(140deg, rgba(7,14,19,0.34), rgba(4,10,14,0.34)), url('/menu_bg.png')",
                backgroundBlendMode: "normal",
                backgroundPosition: "center right",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute left-0 top-[18%] bottom-[18%] w-px bg-[linear-gradient(to_bottom,transparent,rgba(110,242,178,0.92),transparent)] shadow-[0_0_12px_rgba(110,242,178,0.35)]" />
              <div className="pointer-events-none absolute left-[18%] top-0 right-[18%] h-px bg-[linear-gradient(to_right,transparent,rgba(110,242,178,0.78),transparent)] shadow-[0_0_10px_rgba(110,242,178,0.28)]" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(95%_100%_at_100%_50%,rgba(38,220,150,0.2),transparent_72%)]" />

              <div className="relative z-10 mb-3 flex min-h-[58px] items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-3">
                <Link href="#top" onClick={() => setOpen(false)} className="group flex items-center gap-2.5">
                  <Image
                    src="/gp.png"
                    alt="Göth Péter márkalogó"
                    width={62}
                    height={36}
                    className="h-[32px] w-auto opacity-95"
                  />
                  <span className="inline-flex w-max flex-col leading-none">
                    <span className="block text-[14px] font-bold uppercase tracking-[0.03em] text-[#dce2e7]">GÖTH PÉTER</span>
                    <span className="mt-1 block w-full text-[8px] font-medium uppercase tracking-[0.33em] text-[#aeb8c0]">SZEMÉLYI EDZŐ</span>
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(110,242,178,0.5)] bg-[rgba(12,20,24,0.86)] text-[#6ef2b2] shadow-[0_0_0_1px_rgba(110,242,178,0.18)_inset]"
                  aria-label="Menü bezárása"
                >
                  <span className="text-[1.8rem] leading-none">×</span>
                </button>
              </div>

              <ul className="relative z-10 divide-y divide-[rgba(255,255,255,0.1)]">
                {mobileLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.18, delay: index * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-[1.1rem] font-medium text-white"
                    >
                      <span className="flex items-center gap-3">
                        <FontAwesomeIcon icon={link.icon} aria-hidden="true" className="text-[1.1rem] text-[#6ef2b2]" />
                        <span>{link.label}</span>
                      </span>
                      <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" className="text-[1.05rem] text-[#6ef2b2]" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="relative z-10 mt-6 rounded-2xl border border-[rgba(110,242,178,0.35)] bg-[rgba(7,14,18,0.72)] p-4">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(110,242,178,0.35)] text-[#6ef2b2]">
                    <FontAwesomeIcon icon={faPhone} aria-hidden="true" className="text-[1.15rem]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold leading-tight text-white">Készen állsz a változásra?</p>
                    <p className="mt-1 text-[11px] leading-snug text-[#a8bac7]">Írj nekem és kezdjük el együtt a közös munkát!</p>
                  </div>
                  <Link
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5ce5a4] text-black"
                    aria-label="Kapcsolat"
                  >
                    <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" className="text-[1.1rem]" />
                  </Link>
                </div>
              </div>

              <div className="relative z-10 mt-7 flex items-center gap-4 text-[#7f8e99]">
                <span className="h-px flex-1 bg-[rgba(255,255,255,0.22)]" />
                <span className="text-[0.95rem] font-semibold uppercase tracking-[0.09em]">Kövess itt is</span>
                <span className="h-px flex-1 bg-[rgba(255,255,255,0.22)]" />
              </div>

              <div className="relative z-10 mt-5 flex items-center justify-center gap-6 pb-2">
                <a
                  href="https://www.instagram.com/peter.goth.5"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(110,242,178,0.3)] text-[#6ef2b2]"
                >
                  <FontAwesomeIcon icon={faInstagram} aria-hidden="true" className="text-[1.3rem]" />
                </a>
                <a
                  href="https://www.facebook.com/peter.goth.5"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(110,242,178,0.3)] text-[#6ef2b2]"
                >
                  <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" className="text-[1.2rem]" />
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
