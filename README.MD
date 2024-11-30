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

## Components

### Show

The `Show` component is a simple and elegant way to conditionally render components in React. It accepts a `when` prop that determines whether the child components should be rendered. You can also provide a `fallback` prop to render a different component when the condition is not met.

### Switch

The `Switch` component is a more advanced version of the `Show` component that allows you to conditionally render components based on multiple conditions. It accepts an array of `Match` components as children, each with a `when` prop that determines whether the child components should be rendered. You can also provide a `fallback` prop to render a different component when none of the conditions are met. Inspired by SolidJs.

### Match

The `Match` component is used in conjunction with the `Switch` component to define individual conditions for rendering components. It accepts a `when` prop that determines whether the child components should be rendered. Inspired by SolidJs.

## Show Usage

### Without Fallback

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

### With Fallback

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

### Enable Animation

```
import React from "react"
import { Show } from 'react-render-helper';

const App = () => {
  const showText = false;

  return (
    <div>
      <Show when={showText} animated fallback={<h1>Oops...</h1>}>
        <h1>Hello World</h1>
      </Show>
    </div>
  );
};
```

## Switch Usage

Notes: The `Switch` component requires at least one `Match` component as a child. `Match` components can have a multiple children.

### With Fallback

```
import React from "react"

import { Switch, Match } from 'react-render-helper';

const App = () => {
  const showText = "four";

  return (
      <Switch fallback={<h1>Not Found</h1>}>
        <Match when={showText === "one"}>
          <h1>One</h1>
        </Match>
        <Match when={showText === "two"}>
          <h1>Two</h1>
        </Match>
        <Match when={showText === "three"}>
          <h1>Three</h1>
        </Match>
      </Switch>
  );
};
```

### Without Fallback

```
import React from "react"

import { Switch, Match } from 'react-render-helper';

const App = () => {
  const showText = "two";

  return (
      <Switch>
        <Match when={showText === "one"}>
          <h1>One</h1>
        </Match>
        <Match when={showText === "two"}>
          <h1>Two</h1>
        </Match>
        <Match when={showText === "three"}>
          <h1>Three</h1>
        </Match>
      </Switch>
  );
};
```
