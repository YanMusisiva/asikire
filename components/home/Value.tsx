import { useLang } from "@/context/LangContext";

export default function Value() {
  const { t } = useLang();

  return (
    <section className="bg-[#080808] border-y border-white/5 px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#22c55e] mb-5">
          {t("value.label")}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-black max-w-2xl leading-tight mb-16">
          <span className="text-white">{t("value.h2a")}</span>
          <br />
          <span className="italic text-gradient-green">{t("value.h2b")}</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["value.v1", "value.v2", "value.v3", "value.v4", "value.v5"].map(
            (k, i) => (
              <div
                key={k}
                className="card-hover bg-[#0a0a0a] border border-white/8 p-6 flex gap-4"
              >
                <div className="shrink-0 w-8 h-8 border border-[#22c55e]/30 bg-[#22c55e]/5 flex items-center justify-center">
                  <span className="font-mono text-[10px] text-[#22c55e]">{`0${i + 1}`}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{t(k)}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
