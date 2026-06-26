"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime?: string;
}

const defaultArticles: Article[] = [
  {
    id: "1",
    title: "Comment transformer votre site en machine à prospects",
    slug: "site-machine-prospects",
    excerpt: "Découvrez les 5 leviers essentiels pour convertir vos visiteurs en prospects qualifiés.",
    content: `## Introduction\n\nTrop d'entreprises ont un site vitrine qui n'attire aucun prospect. Voici comment changer ça.\n\n## Les 5 leviers essentiels\n\n**1. Un message clair et percutant**\nVotre visiteur doit comprendre en 5 secondes ce que vous faites et pour qui.\n\n**2. Une offre irrésistible**\nProposez quelque chose de valeur en échange d'un email.\n\n**3. Des preuves sociales**\nTémoignages, chiffres, logos clients.\n\n**4. Des appels à l'action visibles**\nBoutons clairs, positionnés stratégiquement.\n\n**5. Un suivi automatisé**\nUne séquence email pour nurture les prospects.`,
    category: "Stratégie",
    author: "Nexus Growth",
    date: "2026-02-15",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "SaaS et croissance : pourquoi l'automatisation change tout",
    slug: "saas-croissance-automatisation",
    excerpt: "Les entreprises qui automatisent leur acquisition grandissent 3x plus vite. Voici pourquoi.",
    content: `## L'automatisation, pas un luxe mais une nécessité\n\nDans un marché compétitif, les entreprises qui automatisent leur croissance prennent un avantage décisif.\n\n## Ce que l'automatisation permet\n\n- Capturer des prospects 24h/24\n- Qualifier automatiquement les leads\n- Nourrir les prospects avec du contenu pertinent\n- Mesurer chaque étape du tunnel\n\n## Les outils indispensables\n\nCRM, automation email, analytics, chatbots — un écosystème bien configuré multiplie vos résultats sans multiplier vos efforts.`,
    category: "SaaS",
    author: "Nexus Growth",
    date: "2026-01-28",
    readTime: "7 min",
  },
];

interface BlogContextType {
  articles: Article[];
  addArticle: (a: Omit<Article, "id">) => void;
  deleteArticle: (id: string) => void;
  getArticle: (slug: string) => Article | undefined;
}

const BlogContext = createContext<BlogContextType>({
  articles: [],
  addArticle: () => {},
  deleteArticle: () => {},
  getArticle: () => undefined,
});

export function BlogProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>(defaultArticles);

  const addArticle = (a: Omit<Article, "id">) => {
    const newArticle: Article = { ...a, id: Date.now().toString() };
    setArticles((prev) => [newArticle, ...prev]);
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

  return (
    <BlogContext.Provider value={{ articles, addArticle, deleteArticle, getArticle }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlog = () => useContext(BlogContext);
