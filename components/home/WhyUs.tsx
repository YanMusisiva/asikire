import { useLang } from "@/context/LangContext";

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section id="why" className="px-6 py-28 max-w-7xl mx-auto">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#22c55e] mb-5">
        {t("why.label")}
      </p>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            <span className="text-white/40">{t("why.h2a")}</span>
            <br />
            <span className="text-white/40">{t("why.h2b")}</span>
            <br />
            <span className="text-white">{t("why.h2c")}</span>
            <br />
            <span className="text-gradient-green italic">{t("why.h2d")}</span>
          </h2>
          <p className="mt-6 text-white/40 leading-relaxed max-w-sm">
            {t("why.sub")}
          </p>
        </div>
        <div className="space-y-4">
          {[
            { title: "why.w1title", desc: "why.w1", icon: "◈" },
            { title: "why.w2title", desc: "why.w2", icon: "◉" },
            { title: "why.w3title", desc: "why.w3", icon: "◎" },
          ].map((item) => (
            <div
              key={item.title}
              className="card-hover bg-[#0a0a0a] border border-white/8 p-6 flex gap-5"
            >
              <span className="text-[#22c55e] text-xl shrink-0">
                {item.icon}
              </span>
              <div>
                <h3 className="font-display font-bold text-white mb-1">
                  {t(item.title)}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {t(item.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
