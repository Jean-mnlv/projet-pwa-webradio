import React from "react";
import { usePushNotifications } from "../hooks/usePushNotifications";

const VAPID_PUBLIC_KEY = "VOTRE_CLE_PUBLIQUE_VAPID"; // Remplacez par votre clé VAPID

export default function PushDemo() {
  const { permission, subscription, askPermission, subscribe } = usePushNotifications();

  return (
    <div style={{ padding: 16, border: '1px solid #ccc', borderRadius: 8, margin: 16 }}>
      <h3>Notifications Push</h3>
      <div>Permission: <b>{permission}</b></div>
      <button onClick={askPermission} style={{ marginRight: 8 }}>Demander la permission</button>
      <button onClick={() => subscribe(VAPID_PUBLIC_KEY)}>S’abonner aux notifications</button>
      <pre style={{ background: '#f7f7f7', padding: 8, marginTop: 8 }}>{JSON.stringify(subscription, null, 2)}</pre>
    </div>
  );
}
