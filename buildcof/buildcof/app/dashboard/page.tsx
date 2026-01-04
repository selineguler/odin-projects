"use client";

type Cof = {
  id: number;
  name: string;
  linker1?: string | null;
  linker2?: string | null;
  topology?: string | null;
  a?: number | null;
  b?: number | null;
  c?: number | null;
  userId: number;
};

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [cofs, setCofs] = useState<Cof[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/cofs", { credentials: "include" });

      if (res.status === 401) {
        router.push("/auth/login");
        return;
      }

      const data = await res.json();
      setCofs(data);
      setLoading(false);
    }

    load();
  }, [router]);

  if (loading) {
    return <p className="p-8">Loading...</p>;
  }

  return (
    <main className="p-8 text-zinc-900 dark:text-zinc-100">

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Your COF Structures</h1>

        {/* Always-visible Create button */}
        <Link
          href="/cofs/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Create New Structure
        </Link>
      </div>

      {/* If no COFs exist */}
      {cofs.length === 0 && (
        <div className="mt-12 flex flex-col items-center">
          <p className="text-lg mb-4">You haven’t created any COFs yet.</p>

          <Link
            href="/cofs/new"
            className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700"
          >
            Create Your First Structure
          </Link>
        </div>
      )}

      {/* List COF cards */}
      {cofs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cofs.map((cof: any) => (
            <div
              key={cof.id}
              className="border p-4 rounded shadow-sm bg-white dark:bg-zinc-900"
            >
              <h2 className="text-xl font-semibold">{cof.name}</h2>

              <p className="text-sm mt-2">
                <strong>Linker 1:</strong> {cof.linker1 || "—"}
              </p>
              <p className="text-sm">
                <strong>Linker 2:</strong> {cof.linker2 || "—"}
              </p>
              <p className="text-sm">
                <strong>Topology:</strong> {cof.topology || "—"}
              </p>

              <div className="flex gap-3 mt-4">
                <Link
                  href={`/cofs/${cof.id}`}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  View
                </Link>

                <Link
                  href={`/cofs/${cof.id}?edit=true`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </Link>

                <button
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={async () => {
                    const res = await fetch(`/api/cofs/${cof.id}`, {
                      method: "DELETE",
                    });

                    if (res.ok) {
                      setCofs((prev) =>
                        prev.filter((item) => item.id !== cof.id)
                      );
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
