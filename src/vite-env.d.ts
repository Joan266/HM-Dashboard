/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_API_DOMAIN: string;
  readonly VITE_PUBLIC_API_LOCAL_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
