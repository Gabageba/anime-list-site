/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHIKIMORI_AUTH_LINK: string;
  readonly VITE_SHIKIMORI_OAUTH: string;
  readonly VITE_SHIKIMORI_API: string;
  readonly VITE_SHIKIMORI_CLIENT_ID: string;
  readonly VITE_SHIKIMORI_CLIENT_SECRET: string;
  readonly VITE_CHECKIT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
