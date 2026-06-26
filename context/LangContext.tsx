"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.features": "Services",
    "nav.how": "Méthode",
    "nav.proof": "Résultats",
    "nav.blog": "Blog",
    "nav.cta": "Obtenir l'audit gratuit",

    // Hero
    "hero.badge": "Croissance basée sur les résultats",

    "hero.h1a": "Nous aidons les entreprises",

    "hero.h1b": "à obtenir plus de clients",

    "hero.h1c": "et à augmenter leurs revenus",

    "hero.h1d": "grâce à la technologie et au marketing.",

    "hero.sub":
      "Asikire & Co aide les entreprises de services à attirer plus de prospects qualifiés, générer plus de ventes et automatiser leur croissance. Nous sommes rémunérés sur les résultats que nous contribuons à créer.",

    "hero.cta1": "Obtenir un audit gratuit",

    "hero.cta2": "Découvrir notre méthode →",

    // Logos
    "logos.label": "Ils nous font confiance",

    // Offer
    "offer.label": "Lead Magnet · Offre gratuite",
    "offer.h2a": "Recevez votre",
    "offer.h2b": "audit de croissance",
    "offer.h2c": "gratuitement",
    "offer.sub":
      "Nous analysons votre situation et identifions vos meilleures opportunités de croissance.",
    "offer.item1": "Votre capacité actuelle à attirer des prospects",
    "offer.item2": "Vos opportunités de croissance cachées",
    "offer.item3": "Les améliorations concrètes pour convertir plus",
    "offer.item4": "Les canaux qui génèrent le plus de valeur",
    "offer.cta": "Obtenir mon audit gratuit",
    "offer.risk":
      "✔ Gratuit  ✔ Sans engagement  ✔ Réponse sous 24h  ✔ Analyse personnalisée",

    // Value
    "value.label": "Ce que vous apprendrez",
    "value.h2a": "Transformer votre présence digitale",
    "value.h2b": "en machine à acquisition",
    "value.v1":
      "Comment transformer votre présence digitale en machine à acquisition de clients",
    "value.v2":
      "Identifier les canaux qui génèrent le plus de prospects qualifiés",
    "value.v3": "Améliorer la conversion de vos visiteurs en clients payants",
    "value.v4": "Utiliser des solutions SaaS pour automatiser votre croissance",
    "value.v5": "Suivre vos performances pour prendre de meilleures décisions",

    // How
    "how.label": "Notre méthode",
    "how.h2a": "Un système de croissance",
    "how.h2b": "en 4 étapes",
    "how.s1": "Audit & Stratégie",
    "how.s1d":
      "Analyse complète de votre situation actuelle et identification des leviers de croissance.",
    "how.s2": "Architecture Système",
    "how.s2d":
      "Construction des fondations digitales adaptées à vos objectifs.",
    "how.s3": "Activation & Traction",
    "how.s3d":
      "Mise en place des canaux d'acquisition et lancement des campagnes.",
    "how.s4": "Mesure & Optimisation",
    "how.s4d":
      "Suivi continu des performances et itérations pour maximiser les résultats.",

    // Why us
    "why.label": "Pourquoi nous",
    "why.h2a": "Nous ne vendons pas",
    "why.h2b": "des outils.",
    "why.h2c": "Nous vendons",
    "why.h2d": "de la croissance.",
    "why.sub":
      "La différence entre un prestataire tech et un partenaire de croissance, c'est l'obsession du résultat.",
    "why.w1title": "Stratégie de croissance",
    "why.w1":
      "Chaque décision est orientée résultat. Pas de technique pour la technique.",
    "why.w2title": "Solutions SaaS sur-mesure",
    "why.w2":
      "Des outils adaptés à votre métier, pas des logiciels génériques.",
    "why.w3title": "Performance mesurable",
    "why.w3": "Des KPIs clairs, un suivi rigoureux, une croissance visible.",

    // CTA
    "cta.h2a": "Prêt à rendre votre croissance",
    "cta.h2b": "prévisible ?",
    "cta.sub": "Réservez votre audit de croissance — gratuit, sans engagement.",
    "cta.btn": "Commencer maintenant",
    "cta.risk":
      "✔ Audit gratuit  ✔ Sans engagement  ✔ Réponse rapide  ✔ Analyse personnalisée",

    // Blog
    "blog.title": "Blog",
    "blog.sub":
      "Insights, stratégies et ressources pour accélérer votre croissance.",
    "blog.read": "Lire l'article →",
    "blog.empty": "Aucun article pour l'instant.",
    "blog.back": "← Retour au blog",

    // Admin
    "admin.title": "Ajouter un article",
    "admin.title_field": "Titre",
    "admin.slug_field": "Slug (URL)",
    "admin.excerpt": "Résumé",
    "admin.content": "Contenu (Markdown simple)",
    "admin.category": "Catégorie",
    "admin.author": "Auteur",
    "admin.date": "Date",
    "admin.submit": "Publier l'article",
    "admin.success": "Article publié avec succès !",
    "admin.list": "Articles existants",
    "admin.delete": "Supprimer",

    // Footer
    "footer.tagline":
      "Nous construisons des systèmes de croissance pour les entreprises.",
    "footer.links": "Liens",
    "footer.legal": "Légal",
    "footer.privacy": "Confidentialité",
    "footer.terms": "Conditions",
    "footer.copy": "© 2026 Nexus Growth. Tous droits réservés.",
  },
  en: {
    "nav.home": "Home",
    "nav.features": "Services",
    "nav.how": "Method",
    "nav.proof": "Results",
    "nav.blog": "Blog",
    "nav.cta": "Get free audit",

    "hero.badge": "Performance-based growth",

    "hero.h1a": "We help service businesses",

    "hero.h1b": "get more clients",

    "hero.h1c": "and increase revenue",

    "hero.h1d": "through marketing and technology.",

    "hero.sub":
      "Asikire & Co helps service businesses attract qualified leads, generate more sales, and automate growth. We get paid based on the results we help create.",

    "hero.cta1": "Get a free audit",

    "hero.cta2": "See our process →",

    "logos.label": "Trusted by",

    "offer.label": "Lead Magnet · Free offer",
    "offer.h2a": "Receive your",
    "offer.h2b": "growth audit",
    "offer.h2c": "completely free",
    "offer.sub":
      "We analyze your situation and identify your best growth opportunities.",
    "offer.item1": "Your current ability to attract prospects",
    "offer.item2": "Your hidden growth opportunities",
    "offer.item3": "Concrete improvements to convert more clients",
    "offer.item4": "Channels generating the most value",
    "offer.cta": "Get my free audit",
    "offer.risk":
      "✔ Free  ✔ No commitment  ✔ Reply within 24h  ✔ Personalized analysis",

    "value.label": "What you'll learn",
    "value.h2a": "Transform your digital presence",
    "value.h2b": "into a client acquisition machine",
    "value.v1":
      "How to turn your digital presence into a client acquisition engine",
    "value.v2": "Identify channels generating the most qualified leads",
    "value.v3": "Improve conversion from visitors to paying clients",
    "value.v4": "Use SaaS solutions to automate your growth",
    "value.v5": "Track performance to make better decisions",

    "how.label": "Our method",
    "how.h2a": "A growth system",
    "how.h2b": "in 4 steps",
    "how.s1": "Audit & Strategy",
    "how.s1d":
      "Full analysis of your current situation and identification of growth levers.",
    "how.s2": "System Architecture",
    "how.s2d": "Building digital foundations tailored to your objectives.",
    "how.s3": "Activation & Traction",
    "how.s3d": "Setting up acquisition channels and launching campaigns.",
    "how.s4": "Measure & Optimize",
    "how.s4d":
      "Ongoing performance tracking and iterations to maximize results.",

    "why.label": "Why us",
    "why.h2a": "We don't sell",
    "why.h2b": "tools.",
    "why.h2c": "We sell",
    "why.h2d": "growth.",
    "why.sub":
      "The difference between a tech provider and a growth partner is an obsession with results.",
    "why.w1title": "Growth Strategy",
    "why.w1": "Every decision is result-oriented. No tech for tech's sake.",
    "why.w2title": "Custom SaaS Solutions",
    "why.w2": "Tools adapted to your business, not generic software.",
    "why.w3title": "Measurable Performance",
    "why.w3": "Clear KPIs, rigorous tracking, visible growth.",

    "cta.h2a": "Ready to make your growth",
    "cta.h2b": "predictable?",
    "cta.sub": "Book your growth audit — free, no commitment.",
    "cta.btn": "Start now",
    "cta.risk":
      "✔ Free audit  ✔ No commitment  ✔ Fast reply  ✔ Personalized analysis",

    "blog.title": "Blog",
    "blog.sub": "Insights, strategies and resources to accelerate your growth.",
    "blog.read": "Read article →",
    "blog.empty": "No articles yet.",
    "blog.back": "← Back to blog",

    "admin.title": "Add an article",
    "admin.title_field": "Title",
    "admin.slug_field": "Slug (URL)",
    "admin.excerpt": "Summary",
    "admin.content": "Content (simple Markdown)",
    "admin.category": "Category",
    "admin.author": "Author",
    "admin.date": "Date",
    "admin.submit": "Publish article",
    "admin.success": "Article published successfully!",
    "admin.list": "Existing articles",
    "admin.delete": "Delete",

    "footer.tagline": "We build growth systems for businesses.",
    "footer.links": "Links",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.copy": "© 2026 Nexus Growth. All rights reserved.",
  },
};

const LangContext = createContext<LangContextType>({
  lang: "fr",
  setLang: () => {},
  t: (k) => k,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const t = (key: string) => translations[lang][key] ?? key;
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
