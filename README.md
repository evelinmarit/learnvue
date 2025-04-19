Programmiks peab olema installitud bun (bun.sh). Terminalis käsk: powershell -c "irm bun.sh/install.ps1 | iex"
Tee terminalis projekti kaust (mkdir projekti nimi), 
mine loodud kausta (terminalis: cd projekti nimi) ja 
jooksuta käsk: $ bun create rsbuild@latest (vt rsbpack kodulehte https://rspack.dev/guide/start/quick-start)
Tulevad valikud, kus valida vue 3, JavaScript (grupitöö puhul on teine valik ehk TextScript parem variant), Add Biome for code linting and formatting (valikutel liigu nooleklahvidega ja enne enterit vajuta space)
Seejärel öeldakse terminalis ette mida edasi tegema peab.
Peale projekti loomist VSCode avamiseks käsk: code .
index.css faili on kopeeritud ligipääs Bulmale (lehelt: https://bulma.io/documentation/start/installation/)

Käivita terminalis käsuga: bun run dev
Serveri käivitamiseks (seotud Chat.vue-ga) teises terminali aknas käsk: bun bin/server.js

# Rsbuild project

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```
