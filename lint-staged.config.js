export default {
  '**/*.(ts|js|cjs|mjs|vue|astro)': (filenames) => [
    `npx eslint ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`
  ],

  '**/*.(md|mdx|json)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')}`
}
