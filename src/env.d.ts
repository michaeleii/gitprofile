/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GH_API_URL: string;
  readonly VITE_GH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
