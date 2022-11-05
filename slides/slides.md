---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## TypeScript in React projects
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
# css: unocss

# pdf export
# download: true
exportFilename: slides.pdf

# favicon
favicon: favicon.ico

---
# TypeScript in React projects

---
hideInToc: true
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Table of Contents

<Toc minDepth="2" maxDepth="2" />

---
src: ./chapters/structural-typing-vs-nominal-typing.md
---

---
src: ./chapters/basics.md
---

---
src: ./chapters/modeling-types.md
---

---
src: ./chapters/using-types.md
---

---
src: ./chapters/react-and-tsx.md
---

---
src: ./chapters/migration.md
---
