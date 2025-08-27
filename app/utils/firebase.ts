// utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, // optional
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Lazy-load analytics safely
let analyticsInstance: ReturnType<typeof getAnalytics> | null = null;

export const getAnalyticsInstance = async () => {
  if (typeof window !== "undefined" && !analyticsInstance) {
    const supported = await isSupported();
    if (supported) {
      analyticsInstance = getAnalytics(app);
    }
  }
  return analyticsInstance;
};

// Use like this:
export const logCustomEvent = async (eventName: string, eventParams = {}) => {
  const analytics = await getAnalyticsInstance();
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

