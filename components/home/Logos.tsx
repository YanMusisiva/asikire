import { useLang } from "@/context/LangContext";

export default function Logos() {
  const { t } = useLang();

  return (
    <section className="border-y border-white/5 py-10 overflow-hidden">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 text-center mb-8">
        {t("logos.label")}
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {[
            "Stripe",
            "Notion",
            "Vercel",
            "Linear",
            "Figma",
            "Loom",
            "Hubspot",
            "Zapier",
            "Stripe",
            "Notion",
            "Vercel",
            "Linear",
            "Figma",
            "Loom",
            "Hubspot",
            "Zapier",
          ].map((logo, i) => (
            <span
              key={i}
              className="font-display text-lg text-white/10 mx-10 whitespace-nowrap hover:text-white/20 transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
