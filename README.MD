# 🌟 React When

**React When** is a minimalist React component designed to bring elegance and simplicity to conditional rendering. With zero dependencies and seamless TypeScript support, it's a must-have for modern React developers.

---

## ✨ Why Use React When?

- **Elegant Conditional Rendering**: Write cleaner, more readable code.
- **Zero Dependencies**: Lightweight and easy to integrate.
- **TypeScript Support**: Built with developers in mind.

---

## 🚀 Installation

```bash
npm install react-when
```

## Usage

```
import React from 'react';
import { Show } from 'react-when';

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
