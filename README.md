# Nexus Growth — Landing Page

Landing page premium bilingue (FR/EN) pour une agence de croissance digitale.

## Stack

- **Next.js 15** + **TypeScript**
- **Tailwind CSS v3**
- **React Context** (état global : langue + articles blog)

## Structure des fichiers

```
src/
├── app/
│   ├── globals.css          # Styles globaux, animations, variables CSS
│   ├── layout.tsx           # Layout racine + Google Fonts
│   ├── page.tsx             # Page d'accueil (wrapper providers)
│   ├── blog/
│   │   ├── page.tsx         # Liste des articles
│   │   └── [slug]/
│   │       └── page.tsx     # Article individuel
│   └── admin/
│       └── page.tsx         # Interface d'ajout d'articles
├── components/
│   ├── Nav.tsx              # Navigation responsive + switch de langue
│   └── HomePage.tsx         # Toutes les sections de la landing page
└── context/
    ├── LangContext.tsx       # i18n FR/EN avec toutes les traductions
    └── BlogContext.tsx       # Store d'articles en mémoire (avec 2 articles par défaut)
```

## Pages

| URL            | Description                                    |
| -------------- | ---------------------------------------------- |
| `/`            | Landing page complète                          |
| `/blog`        | Liste des articles                             |
| `/blog/[slug]` | Article individuel                             |
| `/admin`       | Interface admin (ajout/suppression d'articles) |

## Installation

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Fonctionnalités

### 🌍 Bilingue FR/EN

- Bouton dans la navbar pour switcher instantanément
- 100% des textes traduits via `LangContext`

### 📝 Blog

- 2 articles de démonstration inclus
- Page liste avec catégories et temps de lecture
- Page article avec rendu Markdown simplifié
- CTA en bas de chaque article

### ⚙️ Admin (`/admin`)

- Formulaire d'ajout d'articles
- Génération automatique du slug depuis le titre
- Sélection de catégorie, auteur, date, temps de lecture
- Liste des articles existants avec boutons Voir / Supprimer
- ⚠️ Les données sont en mémoire (React state) — pour la persistance, brancher sur une DB ou localStorage

### 🎨 Design

- Palette : Noir `#050505` · Blanc `#f5f5f0` · Vert `#22c55e`
- Typographie : Playfair Display (titres) + DM Sans (corps) + DM Mono (labels)
- Animations CSS : fadeUp, grain overlay, marquee logos, green glow
- Cartes hover avec élévation et bordure verte
- Grid background subtile en Hero
- Blob lumineux vert pour la profondeur

## Personnalisation

### Changer les traductions

Modifier `/src/context/LangContext.tsx` — objets `fr` et `en`.

### Ajouter des sections

Modifier `/src/components/HomePage.tsx`.

### Connecter un backend

Remplacer `BlogContext.tsx` par des appels API (fetch vers votre CMS, Supabase, etc.)

## Notes

- Le `BlogContext` est indépendant par page (chaque page wrap ses propres providers).  
  Pour partager l'état entre pages, déplacer les providers dans `layout.tsx` et ajouter `"use client"` au layout.
- L'admin n'est pas protégé par une authentification — à ajouter en production.
