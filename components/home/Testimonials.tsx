import { useLang } from "@/context/LangContext";

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="bg-[#080808] border-y border-white/5 px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#22c55e] mb-5">
          Témoignages
        </p>
        <h2 className="font-display text-4xl font-black text-white mb-16">
          Ce que disent{" "}
          <span className="italic text-gradient-green">nos clients</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              q: "Nexus a transformé notre acquisition. On génère 3x plus de prospects qualifiés chaque mois.",
              a: "CEO, SaaS B2B",
            },
            {
              q: "Leur approche systémique a changé notre façon de penser la croissance. Pas de promesses vaines, que des résultats.",
              a: "Directeur Marketing, Scale-up",
            },
            {
              q: "Le meilleur investissement tech de l'année. ROI visible dès le premier mois.",
              a: "Fondateur, PME industrielle",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card-hover bg-[#0a0a0a] border border-white/8 p-7"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="#22c55e"
                  >
                    <path d="M6 1L7.5 4.5H11L8.2 6.8L9.3 10.5L6 8.3L2.7 10.5L3.8 6.8L1 4.5H4.5L6 1Z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic mb-5">
                "{item.q}"
              </p>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
