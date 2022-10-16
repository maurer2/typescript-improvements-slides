---
layout: section
---

## Migrating to TypeScript

---
hideInToc: true
layout: two-cols-header-with-gap
---

### Soft migration

Soft migration allows a gradual migration in parallel to regular feature work, albeit at a slower pace.

::left::

1. Add a `jsconfig.json` file and set `checkJs` to `false` to disable type checking in JS files
1. Set `checkJs` to `true`, when working on the migration or enable it on a per file basis via adding a `// @ts-check` line at the start of a JS file
1. Fix all errors that are fixable without type annotations and disable the remaining ones by prepending each with `// @ts-ignore`
1. Install TypeScript dependencies and necessary type packages like `@types/react-dom`
1. Create a script, that runs the TypeScript compiler in no-emit mode to check remaining errors: `npx -p typescript tsc jsconfig.json`

::right::

```json
{
  "compilerOptions": {
    "target": "ES2022", // ES3 is default
    "checkJs": false,
    "allowJs": true,
    "noEmit": true,
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "./**/*.js"
  ]
}
```

Example `jsconfig.json` in project root

---
hideInToc: true
layout: two-cols-header-with-gap
---

### Soft migration (part 2)

&nbsp;

::left::

6. Add TypeScript to build pipelines
6. Create a `tsconfig.json` file via `npx -p typescript tsc --init` and disable strict mode, strict null checks and no implicit any
6. Rename all `.js` files to `.ts` and `.tsx`
6. Reenable previously disabled errors and fix them
6. Add TypeScript-specific linter rules, f.e. `eslint-config-airbnb-typescript` and adapt code to new linter rules
6. Enable strict mode, strict null checks and no implicit any again
6. Fix TypeScript errors caused by stricter TypeScript settings
6. Improve types for components, tests etc. further

::right::

```json
{
  "compilerOptions": {
    "target": "ES2022", // ES3 is default
    "strict": false,
    "strictNullChecks": false,
    "noImplicityAny": false
  },
   "lib": [
    "dom",
    "dom.iterable"
  ],
  "exclude": [
    "node_modules"
  ],
  "include": [
    "./**/*.tsx",
    "./**/*.ts"
  ]
}
```

Example `tsconfig.json` in project root

---
hideInToc: true
layout: two-cols-header-with-gap
---

### Big bang migration

Allows a faster migration by converting all files at once at the expense of stopping feature work for a certain period of time.
It might require freezing the code base for the duration of the migration.

::left::

1. Install TypeScript dependencies and necessary type packages like `@types/react-dom`
1. Create a `tsconfig.json` file via `npx -p typescript tsc --init` and disable strict mode, strict null checks and no implicit any
1. Rename all `.js` files to `.ts` and `.tsx`
1. Fix all TypeScript errors
1. Add TypeScript to build pipelines
1. Enable strict mode, strict null checks and no implicit any again

::right::

7. Fix TypeScript errors caused by stricter TypeScript settings
7. Improve types for components, tests etc. further
