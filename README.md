# Lessons

Projet personnel en **HTML / CSS / JavaScript** contenant notamment :

- des mémos Git / Terminal ;
- des exercices JavaScript ;
- des mini-algorithmes ;
- une recherche avec **Pagefind** ;
- un build statique généré dans `docs/` ;
- un déploiement avec **GitHub Pages**.

---

## Prérequis

Sur une nouvelle machine, vérifier que les outils suivants sont installés.

### Git

```bash
git --version
```

### Node.js

```bash
node --version
```

### npm

```bash
npm --version
```

> `npm` est installé automatiquement avec Node.js.

---

## Installation sur une nouvelle machine

### 1. Cloner le projet

Avec HTTPS :

```bash
git clone https://github.com/JonasOrganisation/lessons.git
```

Ou avec SSH si la clé SSH GitHub est déjà configurée :

```bash
git clone git@github.com:JonasOrganisation/lessons.git
```

### 2. Entrer dans le projet

```bash
cd lessons
```

### 3. Installer les dépendances

```bash
npm install
```

Cette commande utilise le `package.json` et installe notamment **Pagefind**.

Il n'est donc pas nécessaire d'installer Pagefind manuellement sur chaque nouvelle machine.

---

## Construire le site

Le dossier source principal est :

```text
pages/
```

Le dossier généré pour GitHub Pages est :

```text
docs/
```

> ⚠️ Ne pas modifier directement les fichiers présents dans `docs/`.

Le dossier `docs/` est recréé automatiquement pendant le build.

### Build complet

```bash
npm run build:prod
```

Cette commande exécute :

```bash
npm run anchors
npm run build
npm run pagefind
```

### Détail des commandes

| Commande             | Rôle                                       |
| -------------------- | ------------------------------------------ |
| `npm run anchors`    | Ajoute automatiquement les `id` aux titres |
| `npm run build`      | Génère le dossier `docs/`                  |
| `npm run pagefind`   | Génère l'index de recherche Pagefind       |
| `npm run build:prod` | Exécute toutes les étapes ci-dessus        |

---

## Lancer le site localement

Après le build :

```bash
npx serve docs
```

Puis ouvrir l'adresse indiquée par `serve`, généralement :

```text
http://localhost:3000
```

### Page de recherche

```text
http://localhost:3000/search.html
```

---

## Pagefind

Pagefind doit être généré **après le build**.

Si la barre de recherche ne fonctionne pas ou si le navigateur affiche des erreurs `404` concernant :

```text
pagefind-component-ui.js
pagefind-component-ui.css
```

relancer :

```bash
npm run build:prod
```

puis :

```bash
npx serve docs
```

Le dossier suivant doit exister :

```text
docs/pagefind/
```

avec notamment :

```text
docs/pagefind/pagefind-component-ui.js
docs/pagefind/pagefind-component-ui.css
```

---

## Différence local / GitHub Pages

En local, Pagefind utilise :

```text
/pagefind/
```

Sur GitHub Pages :

```text
/lessons/pagefind/
```

Le fichier suivant gère cette différence automatiquement :

```text
assets/js/pagefind.js
```

---

## Workflow après un clone

Sur une nouvelle machine :

```bash
git clone https://github.com/JonasOrganisation/lessons.git
cd lessons
npm install
npm run build:prod
npx serve docs
```

### À retenir

```text
Clone
  ↓
npm install
  ↓
npm run build:prod
  ↓
npx serve docs
```

---

## Avant une mise en production

Reconstruire le site :

```bash
npm run build:prod
```

Vérifier localement :

```bash
npx serve docs
```

Puis :

```bash
git add -A
git commit -m "build: update site"
git push
```

---

## Fichiers à modifier

Travailler principalement dans :

```text
pages/
assets/
components/
css/
```

Ne pas modifier directement :

```text
docs/
```

Puis reconstruire avec :

```bash
npm run build:prod
```

---

## Commandes essentielles

```bash
# Installer
npm install

# Construire
npm run build:prod

# Lancer en local
npx serve docs

```
