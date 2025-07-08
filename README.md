# PWA Webradios Frontend

Ce projet est le frontend de l'application "PWA-webradio".

## Description

Application web progressive (PWA) permettant d'écouter des radios, d'accéder à l'actualité, à l'exploration de contenus et à des informations locales. Conçue avec React, TypeScript, Vite, React Router, Zustand et React Query. Prête pour une intégration mobile via Capacitor.

## Fonctionnalités principales
- Lecture de radios en direct
- Navigation par onglets (Radios, Actu, Explorer, Infos, Compte)
- Gestion de l'onboarding et du choix du pays (page de lancement : OnboardingPage)
- Stockage local des préférences utilisateur
- Architecture modulaire par "features"
- PWA installable (manifest, service worker)
- Prête pour build natif (Capacitor)

## Structure du projet

```
frontend/
├── public/                # Fichiers statiques (index.html, manifest, icônes)
├── src/                   # Code source React/TypeScript
│   ├── assets/            # Images, polices, etc.
│   ├── components/        # UI réutilisable (Button, Card, Layout...)
│   ├── features/          # Modules métier (Onboarding, Radios, News...)
│   ├── hooks/             # Hooks globaux
│   ├── services/          # API, React Query
│   ├── routes/            # Routing centralisé
│   ├── styles/            # CSS globaux
│   ├── App.tsx            # Composant racine
│   ├── index.tsx          # Entrée app
│   ├── serviceWorkerRegistration.ts # PWA
│   └── reportWebVitals.ts # Web vitals
├── package.json           # Dépendances et scripts
├── tsconfig.json          # Config TypeScript
├── capacitor.config.ts    # Config Capacitor
├── .env.local             # Variables d'environnement (dev)
├── .env.production        # Variables d'environnement (prod)
├── .gitignore             # Fichiers ignorés par git
└── README.md              # Ce fichier
```

## Démarrage rapide

```bash
# Cloner le repo
# git clone https://github.com/votre-utilisateur/pwa-webradios.git
cd frontend
npm install
npm run dev
```

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Scripts utiles
- `npm run dev` : Démarre le serveur de dev Vite
- `npm run build` : Build de production
- `npm run preview` : Prévisualisation du build

## Technologies principales
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Query](https://tanstack.com/query/latest)
- [Capacitor](https://capacitorjs.com/)

## Exemples de commandes

```bash
# Ajouter une dépendance
npm install <package>

# Lancer les tests (à configurer)
npm test
```

## Déploiement
- Build de production : `npm run build` (sortie dans `dist/`)
- Déploiement sur un hébergeur statique (Netlify, Vercel, etc.)
- Intégration mobile : voir la doc Capacitor

## Contribution
1. Forkez le repo
2. Créez une branche (`git checkout -b feature/ma-feature`)
3. Commitez vos modifications
4. Poussez la branche
5. Ouvrez une Pull Request

## Documentation API
- L’API Django backend fournit toutes les données (radios, news, etc.)
- Voir la documentation interne pour les endpoints détaillés

## Licence

MIT

---

Contact : contact@mnlvm.com
