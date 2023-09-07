/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
