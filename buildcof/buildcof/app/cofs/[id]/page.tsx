"use client";

import { use, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Cof = {
  id: number;
  name: string;
  linker1?: string | null;
  linker2?: string | null;
  topology?: string | null;
  a?: number | null;
  b?: number | null;
  c?: number | null;
};

export default function CofPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params (Next.js 16 requirement)
  const { id } = use(params);

  const router = useRouter();
  const searchParams = useSearchParams();
  const editMode = searchParams.get("edit") === "true";

  const [cof, setCof] = useState<Cof | null>(null);
  const [loading, setLoading] = useState(true);

  // Form fields
  const [name, setName] = useState("");
  const [linker1, setLinker1] = useState("");
  const [linker2, setLinker2] = useState("");
  const [topology, setTopology] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/cofs/${id}`, { credentials: "include" });

      if (res.status === 401) return router.push("/auth/login");
      if (res.status === 404) return router.push("/dashboard");

      const data = await res.json();
      setCof(data);

      // Prefill form
      setName(data.name);
      setLinker1(data.linker1 ?? "");
      setLinker2(data.linker2 ?? "");
      setTopology(data.topology ?? "");
      setA(data.a ?? "");
      setB(data.b ?? "");
      setC(data.c ?? "");

      setLoading(false);
    }

    load();
  }, [id, router]);   // ← use 'id', NOT params.id

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/cofs/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        linker1,
        linker2,
        topology,
        a: a ? Number(a) : null,
        b: b ? Number(b) : null,
        c: c ? Number(c) : null,
      }),
    });

    if (res.ok) router.push("/dashboard");
    else alert("Failed to update COF");
  }

  if (loading) return <p className="p-8">Loading...</p>;

  // VIEW MODE
  if (!editMode) {
    return (
      <main className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{cof?.name}</h1>

        <div className="border p-6 bg-white dark:bg-zinc-900 rounded">
          <p><strong>Linker 1:</strong> {cof?.linker1 ?? "—"}</p>
          <p><strong>Linker 2:</strong> {cof?.linker2 ?? "—"}</p>
          <p><strong>Topology:</strong> {cof?.topology ?? "—"}</p>
          <p><strong>a:</strong> {cof?.a ?? "—"}</p>
          <p><strong>b:</strong> {cof?.b ?? "—"}</p>
          <p><strong>c:</strong> {cof?.c ?? "—"}</p>
        </div>

        <button
          onClick={() => router.push(`/cofs/${id}?edit=true`)}
          className="mt-6 bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-6 ml-4 bg-gray-300 px-4 py-2 rounded"
        >
          Back
        </button>
      </main>
    );
  }

  // EDIT MODE
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit COF</h1>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4">

        <input className="p-2 border rounded" value={name} onChange={e => setName(e.target.value)} />

        <input className="p-2 border rounded" value={linker1} onChange={e => setLinker1(e.target.value)} />

        <input className="p-2 border rounded" value={linker2} onChange={e => setLinker2(e.target.value)} />

        <input className="p-2 border rounded" value={topology} onChange={e => setTopology(e.target.value)} />

        <input className="p-2 border rounded" value={a} onChange={e => setA(e.target.value)} type="number" />

        <input className="p-2 border rounded" value={b} onChange={e => setB(e.target.value)} type="number" />

        <input className="p-2 border rounded" value={c} onChange={e => setC(e.target.value)} type="number" />

        <button type="submit" className="p-3 bg-blue-600 text-white rounded mt-4">
          Save Changes
        </button>

        <button
          type="button"
          onClick={() => router.push(`/cofs/${id}`)}
          className="p-3 bg-gray-300 rounded"
        >
          Cancel
        </button>
      </form>
    </main>
  );
}
