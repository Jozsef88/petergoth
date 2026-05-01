"use client";

import { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "gp_cookie_consent_v1";
const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;

type StoredConsent = {
  acceptedAt: number;
};

function shouldShowConsentBanner() {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) {
      return true;
    }

    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed?.acceptedAt || Number.isNaN(parsed.acceptedAt)) {
      return true;
    }

    return Date.now() - parsed.acceptedAt >= ONE_YEAR_MS;
  } catch {
    return true;
  }
}

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(shouldShowConsentBanner());
  }, []);

  function acceptCookies() {
    const data: StoredConsent = {
      acceptedAt: Date.now(),
    };

    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(data));
    setIsOpen(false);
  }

  function rejectCookies() {
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] px-3 pb-3 sm:px-6 sm:pb-6" role="dialog" aria-modal="false" aria-label="Süti hozzájárulás">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-[rgba(80,255,180,0.24)] bg-[linear-gradient(135deg,rgba(8,16,20,0.97),rgba(4,10,14,0.97))] p-4 shadow-[0_14px_46px_rgba(4,12,10,0.7)] sm:p-5">
        <div className="pointer-events-none absolute -right-16 -top-16 hidden h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(70,255,170,0.16),transparent_70%)] sm:block" />

        <div className="relative z-10 flex flex-col gap-4 sm:gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Süti hozzájárulás</p>
            <p className="mt-1 text-sm leading-relaxed text-[#c2ccd5] sm:text-[15px]">
              Ez az oldal sütiket használ a működéshez és elemzéshez. Elfogadás esetén a választásod 1 évig érvényes.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={rejectCookies}
              className="inline-flex items-center justify-center rounded-[12px] border border-[rgba(150,170,182,0.35)] bg-[rgba(10,16,20,0.65)] px-4 py-2.5 text-xs font-semibold tracking-[0.04em] text-[#d6dee5] transition hover:border-[rgba(190,206,216,0.55)]"
            >
              Elutasítom
            </button>
            <button
              type="button"
              onClick={acceptCookies}
              className="inline-flex items-center justify-center rounded-[12px] border border-[rgba(85,235,165,0.65)] bg-[linear-gradient(135deg,#6ef2b2,#3be08f)] px-4 py-2.5 text-xs font-semibold tracking-[0.04em] text-black transition hover:brightness-105"
            >
              Elfogadom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
