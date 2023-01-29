# Astro Starter Kit

Starter setup Astro.build with some opinionated setup

## Setup for development

this project uses `npm` as package manager && the following tools:

prettier <https://prettier.io>

eslint <https://eslint.org>

husky <https://typicode.github.io/husky/#/>

commitlint <https://commitlint.js.org/#/>

lint-staged <https://github.com/okonet/lint-staged>

Tailwindcss <https://tailwindcss.com>

Astro MDX <https://docs.astro.build/en/guides/markdown-content/>

### Install the dependencies

```bash
npm i
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```md
/
├── .github/
│ └── dependabot.yml
├── .husky/
│ └── commit-msg
│ └── pre-commit
├── .vscode/
│ └── extensions.json
│ └── launch.json
│ └── settings.json
├── public/
│ └── favicon.svg
├── src/
│ ├── components/
│ │ └── Card.astro
│ ├── layouts/
│ │ └── Layout.astro
│ └── pages/
│ └── index.astro
└── .commitlintrc.json
└── .eslintignore
└── .eslintrc.cjs
└── .gitignore
└── .prettierignore
└── .prettierrc
└── astro.config.mjs
└── lint-staged.config.js
└── package-lock.json
└── package.json
└── postcss.config.cjs
└── README.md
└── tailwind.config.cjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run prepare`      | Prepare && install git hooks                     |
| `npm run lint`         | Run linter                                       |
| `npm run format:check` | Run formatter check                              |
| `npm run format:write` | Run formatter write                              |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
