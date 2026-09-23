const fs = require("fs");
const path = require("path");

const pagesDir = path.join(__dirname, "..", "..", "pages");
function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function processFile(filePath) {
  let html = fs.readFileSync(filePath, "utf8");

  html = html.replace(
    /<(h[2-6])([^>]*)>(.*?)<\/\1>/gis,
    (match, tag, attrs, content) => {
      if (/\sid=/.test(attrs)) {
        return match;
      }

      const text = content.replace(/<[^>]+>/g, "").trim();

      if (!text) {
        return match;
      }

      const id = slugify(text);

      return `<${tag}${attrs} id="${id}">${content}</${tag}>`;
    },
  );

  fs.writeFileSync(filePath, html, "utf8");

  console.log(`IDs ajoutés : ${path.basename(filePath)}`);
}

fs.readdirSync(pagesDir).forEach((file) => {
  if (file.endsWith(".html")) {
    processFile(path.join(pagesDir, file));
  }
});
