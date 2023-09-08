/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHIKIMORI_AUTH_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
