declare module 'global' {
  export default globalThis;
}

// will be provided by the webpack define plugin
declare var NODE_ENV: string | undefined;
