import { useEffect, useState } from "react";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        await signInAnonymously(auth);
      } else {
        setUser(firebaseUser);
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  return { user, loading };
}
