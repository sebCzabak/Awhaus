// src/custom.d.ts

// Deklaracja dla modułów CSS
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Opcjonalnie: Deklaracje dla obrazków (jeśli masz podobny problem z importem obrazków)
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}