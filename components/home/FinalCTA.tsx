import { useLang } from "@/context/LangContext";

export default function FinalCTA() {
  const { t } = useLang();

  return (
    <section className="relative px-6 py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#22c55e]/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full bg-[#22c55e] opacity-[0.03] blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl font-black leading-tight">
          <span className="text-white">{t("cta.h2a")}</span>
          <br />
          <span className="text-gradient-green italic">{t("cta.h2b")}</span>
        </h2>
        <p className="mt-6 text-white/40 max-w-lg mx-auto">{t("cta.sub")}</p>
        <a
          href="#offer"
          className="inline-block btn-primary mt-10 px-12 py-5 text-sm uppercase tracking-widest green-glow"
        >
          {t("cta.btn")}
        </a>
        <p className="font-mono text-[10px] text-white/20 mt-6">
          {t("cta.risk")}
        </p>
      </div>
    </section>
  );
}
