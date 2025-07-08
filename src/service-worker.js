import React from "react";
import { usePushNotifications } from "../hooks/usePushNotifications";

const VAPID_PUBLIC_KEY = "VOTRE_CLE_PUBLIQUE_VAPID";

export default function PushDemo() {
  const { permission, subscription, askPermission, subscribe } = usePushNotifications();

  return (
    <div>
      <div>Permission: {permission}</div>
      <button onClick={askPermission}>Demander la permission</button>
      <button onClick={() => subscribe(VAPID_PUBLIC_KEY)}>S’abonner aux notifications</button>
      <pre>{JSON.stringify(subscription, null, 2)}</pre>
    </div>
  );
}

// Service Worker (Workbox ou Vite PWA uniquement, sans React ni JSX)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        const responseClone = response.clone();
        caches.open('pwa-cache-v1').then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
    )
  );
});

// Gestion des notifications push
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Notification';
  const options = {
    body: data.body || '',
    icon: '/icons/logo_mnlv_192x192.png',
    badge: '/icons/logo_mnlv_192x192.png',
    data: data.url || '/'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (const client of clientList) {
        if (client.url === event.notification.data && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data);
      }
    })
  );
});
