---
layout: section
---

## Migrating to TypeScript

---
hideInToc: true
layout: two-cols-header-with-gap
---

### Soft migration

Soft migration allows a step by step migration in parallel to regular feature work, albeit at a slower pace.

::left::

1. Add a `jsconfig.json` file to the root of the project where `checkJs` is set to false to disable global type checking in JS files
1. Either set `checkJs` to `true`, when working on the migration or enable it on a per file basis via adding a `// @ts-check` line at the start of a JS file
1. Fix all errors that are fixable without type annotations and disable the remaining ones by prepending each with `// @ts-ignore`
1. Optional: *Create a script, that runs the TypeScript compiler in no-emit mode to check remaining errors, e.g. `npx -p typescript tsc jsconfig.json`*

::right::

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "checkJs": false,
    "allowJs": true,
    "noEmit": true,
  },
  "exclude": [
    "node_modules",
    "**/node_modules/*"
  ],
  "include": [
    "./**/*.js"
  ]
}
```

Example `jsconfig.json`

---
hideInToc: true
layout: two-cols-header-with-gap
---

### Soft migration (part 2)

&nbsp;

::left::
5. Add TypeScript compilation step to build pipeline
5. Once all TypeScript errors are fixed or disabled and Typescript files can be transpiled to JavaScript, rename all `.js`-files to `.tsx` and update file imports
5. Rename `jsconfig.json` to `tsconfig.json` and disable no-emit mode
5. Reenable previously disabled errors and fix them
5. Add TypeScript-specific linter rules, like `eslint-config-airbnb-typescript` and adapt code to new rules
5. Improve types for components, tests etc.

---
hideInToc: true
---

### Big bang migration

Todo
