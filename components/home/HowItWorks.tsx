import { useLang } from "@/context/LangContext";

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="method" className="px-6 py-28 max-w-7xl mx-auto">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#22c55e] mb-5">
        {t("how.label")}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16">
        <span className="text-white">{t("how.h2a")}</span>
        <br />
        <span className="italic text-gradient-green">{t("how.h2b")}</span>
      </h2>
      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-6 left-8 right-8 h-px bg-linear-to-r from-transparent via-[#22c55e]/20 to-transparent" />
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { s: "how.s1", d: "how.s1d" },
            { s: "how.s2", d: "how.s2d" },
            { s: "how.s3", d: "how.s3d" },
            { s: "how.s4", d: "how.s4d" },
          ].map((item, i) => (
            <div
              key={item.s}
              className="relative card-hover bg-[#0a0a0a] border border-white/8 p-7"
            >
              <div className="w-12 h-12 border border-[#22c55e]/20 bg-[#22c55e]/5 flex items-center justify-center mb-5">
                <span className="font-display font-black text-[#22c55e] text-xl">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">
                {t(item.s)}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {t(item.d)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
