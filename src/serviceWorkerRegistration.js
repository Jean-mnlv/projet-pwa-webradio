// Service Worker registration (exemple CRA)

// Enregistrement du Service Worker pour PWA
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(
        (registration) => {
          console.log('Service Worker enregistré avec succès:', registration);
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement du Service Worker:', error);
        }
      );
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
