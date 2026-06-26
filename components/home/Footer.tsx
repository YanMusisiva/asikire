import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-[#22c55e] flex items-center justify-center">
                <span className="text-black font-bold text-xs font-mono">
                  N
                </span>
              </div>
              <span className="font-display font-bold text-white">
                Nexus<span className="text-[#22c55e]">.</span>
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-4">
              {t("footer.links")}
            </p>
            <ul className="space-y-2">
              {[
                { href: "#services", label: t("nav.features") },
                { href: "#method", label: t("nav.how") },
                { href: "/blog", label: t("nav.blog") },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/30 text-sm hover:text-white/60 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-4">
              {t("footer.legal")}
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/30 text-sm hover:text-white/60 transition-colors"
                >
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/30 text-sm hover:text-white/60 transition-colors"
                >
                  {t("footer.terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-white/20">
            {t("footer.copy")}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="font-mono text-[10px] text-white/20">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
