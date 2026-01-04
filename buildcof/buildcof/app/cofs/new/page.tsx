"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCofPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [linker1, setLinker1] = useState("");
  const [linker2, setLinker2] = useState("");
  const [topology, setTopology] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/cofs", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        linker1,
        linker2,
        topology,
        a: a ? parseFloat(a) : null,
        b: b ? parseFloat(b) : null,
        c: c ? parseFloat(c) : null,
      }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else if (res.status === 401) {
      router.push("/auth/login");
    } else {
      alert("Failed to create COF");
    }
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New COF</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <input
          className="p-2 border rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="p-2 border rounded"
          placeholder="Linker 1"
          value={linker1}
          onChange={(e) => setLinker1(e.target.value)}
        />

        <input
          className="p-2 border rounded"
          placeholder="Linker 2"
          value={linker2}
          onChange={(e) => setLinker2(e.target.value)}
        />

        <input
          className="p-2 border rounded"
          placeholder="Topology"
          value={topology}
          onChange={(e) => setTopology(e.target.value)}
        />

        <input
          className="p-2 border rounded"
          placeholder="a (Å)"
          value={a}
          onChange={(e) => setA(e.target.value)}
          type="number"
          step="0.01"
        />

        <input
          className="p-2 border rounded"
          placeholder="b (Å)"
          value={b}
          onChange={(e) => setB(e.target.value)}
          type="number"
          step="0.01"
        />

        <input
          className="p-2 border rounded"
          placeholder="c (Å)"
          value={c}
          onChange={(e) => setC(e.target.value)}
          type="number"
          step="0.01"
        />

        <button
          className="p-3 bg-blue-600 text-white rounded mt-4"
          type="submit"
        >
          Create COF
        </button>

        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="p-3 bg-gray-300 rounded"
        >
          Cancel
        </button>
      </form>
    </main>
  );
}

