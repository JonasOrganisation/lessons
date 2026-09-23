const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const docs = path.join(root, "docs");
const pages = path.join(root, "pages");

// Supprime l'ancien dossier docs/
if (fs.existsSync(docs)) {
  fs.rmSync(docs, {
    recursive: true,
    force: true,
  });
}

// Recrée docs/
fs.mkdirSync(docs, {
  recursive: true,
});

function copyHtml(source, destination) {
  let html = fs.readFileSync(source, "utf8");

  html = html
    .replaceAll("../css/", "./css/")
    .replaceAll("../assets/", "./assets/")
    .replaceAll("../components/", "./components/");

  fs.writeFileSync(destination, html, "utf8");
}

// Copie toutes les pages HTML vers la racine de docs/
fs.readdirSync(pages).forEach((file) => {
  if (file.endsWith(".html")) {
    copyHtml(path.join(pages, file), path.join(docs, file));
  }
});

// Copie les dossiers statiques
["assets", "components", "css"].forEach((folder) => {
  fs.cpSync(path.join(root, folder), path.join(docs, folder), {
    recursive: true,
  });
});

// Modifie uniquement le header généré dans docs/
const headerPath = path.join(docs, "components", "header.js");

let header = fs.readFileSync(headerPath, "utf8");

header = header.replace(
  "const pagesBase = isLocal ? `${base}pages/` : base;",
  "const pagesBase = base;",
);

fs.writeFileSync(headerPath, header, "utf8");

console.log("Build terminé dans docs/");
