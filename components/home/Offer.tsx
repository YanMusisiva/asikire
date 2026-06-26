import { useLang } from "@/context/LangContext";

export default function Offer() {
  const { t } = useLang();

  return (
    <section id="offer" className="px-6 py-28 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#22c55e] mb-5">
            {t("offer.label")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            <span className="text-white/50">{t("offer.h2a")}</span>
            <br />
            <span className="text-white">{t("offer.h2b")}</span>
            <br />
            <span className="text-gradient-green italic">{t("offer.h2c")}</span>
          </h2>
          <p className="mt-5 text-white/40 leading-relaxed">{t("offer.sub")}</p>
          <ul className="mt-8 space-y-3">
            {["offer.item1", "offer.item2", "offer.item3", "offer.item4"].map(
              (k) => (
                <li key={k} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center shrink-0">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1.5 4L3.2 5.7L6.5 2.5"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-white/60 text-sm">{t(k)}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Right form card */}
        <div className="bg-[#0a0a0a] border border-white/8 p-8 md:p-10">
          <div className="space-y-4">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/30 block mb-2">
                Prénom
              </label>
              <input
                type="text"
                placeholder="Jean"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-[#22c55e]/40 transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/30 block mb-2">
                Email professionnel
              </label>
              <input
                type="email"
                placeholder="jean@entreprise.com"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-[#22c55e]/40 transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/30 block mb-2">
                Entreprise
              </label>
              <input
                type="text"
                placeholder="Nom de votre entreprise"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-[#22c55e]/40 transition-colors"
              />
            </div>
            <button className="w-full btn-primary py-4 text-sm uppercase tracking-widest mt-2 green-glow">
              {t("offer.cta")}
            </button>
            <p className="font-mono text-[10px] text-white/20 text-center leading-relaxed">
              {t("offer.risk")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
