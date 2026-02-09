"use client";

import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Watch Together MVP</h1>
      <p className="mt-2 text-gray-600">
        Logged in as: {user.uid}
      </p>

      <button
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded"
      >
        Start Watch Party
      </button>
    </main>
  );
}
