# 🌟 react-render-helper

**react-render-helper** is a minimalist React component designed to bring elegance and simplicity to conditional rendering. With zero dependencies and seamless TypeScript support, it's a must-have for modern React developers.

---

## ✨ Why Use react-render-helper?

- **Elegant Conditional Rendering**: Write cleaner, more readable code.
- **Zero Dependencies**: Lightweight and easy to integrate.
- **TypeScript Support**: Built with developers in mind.

---

## 🚀 Installation

```bash
npm install react-render-helper

pnpm install react-render-helper

yarn add react-render-helper
```

## Usage

### without fallback

```
import React from "react"
import { Show } from 'react-render-helper';

const App = () => {
  const showText = true;

  return (
    <div>
      <Show when={showText}>
        <h1>Hello World</h1>
      </Show>
    </div>
  );
};
```

### with fallback

```
import React from "react"
import { Show } from 'react-render-helper';

const App = () => {
  const showText = false;

  return (
    <div>
      <Show when={showText} fallback={<h1>Oops...</h1>}>
        <h1>Hello World</h1>
      </Show>
    </div>
  );
};
```

### enable animation

```
import React from "react"
import { Show } from 'react-render-helper';

const App = () => {
  const showText = false;

  return (
    <div>
      <Show when={showText} fallback={<h1>Oops...</h1>}>
        <h1>Hello World</h1>
      </Show>
    </div>
  );
};
```
