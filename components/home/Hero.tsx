import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Green glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-[#22c55e] opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 border border-[#22c55e]/30 bg-[#22c55e]/5 px-4 py-1.5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#22c55e]">
            {t("hero.badge")}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black leading-[1.05] text-[clamp(2.6rem,6vw,5.5rem)] animate-fade-up delay-100">
          <span className="text-white">{t("hero.h1a")}</span>
          <br />
          <span className="text-gradient-green italic">{t("hero.h1b")}</span>
          <br />
          <span className="text-white/80">{t("hero.h1c")}</span>
          <br />
          <span className="text-white">{t("hero.h1d")}</span>
        </h1>

        <p className="mt-7 text-white/40 max-w-xl mx-auto text-base leading-relaxed animate-fade-up delay-200">
          {t("hero.sub")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-10 justify-center animate-fade-up delay-300">
          <a
            href="#offer"
            className="btn-primary px-8 py-4 text-sm uppercase tracking-widest"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#method"
            className="btn-outline px-8 py-4 text-sm uppercase tracking-widest"
          >
            {t("hero.cta2")}
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mt-16 justify-center flex-wrap animate-fade-up delay-400">
          {[
            { val: "50+", key: "hero.stat1" },
            { val: "98%", key: "hero.stat2" },
            { val: "3×", key: "hero.stat3" },
          ].map((s) => (
            <div key={s.key} className="text-center">
              <p className="font-display text-3xl font-black text-[#22c55e]">
                {s.val}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mt-1">
                {t(s.key)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in delay-700">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
          Scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
