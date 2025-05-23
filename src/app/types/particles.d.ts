declare module 'particles.js' {
  export const particlesJS: {
    load: (
      tagId: string,
      path: string,
      callback: () => void
    ) => void;
    // Add more types here if needed
  };

  // Also make particlesJS available globally (optional, but often needed)
  global {
    interface Window {
      particlesJS: typeof particlesJS;
    }
  }
}
