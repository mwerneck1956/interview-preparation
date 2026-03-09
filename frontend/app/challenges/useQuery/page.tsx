"use client";
import useQuery from "@/hooks/useQuery";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState(false);

  async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            name: "Werneck",
          },
        });
      }, 3000);
    });
  }

  const request = useQuery(async () => {
    const response = await fetchData();
    return response.data;
  }, [name]);

  return (
    <section className="flex flex-col items-center mt-30">
      <h1 className="text-lg font-bold"> Use Query test</h1>
      <div>
        {request.status === 'loading' && <p>Loading...</p>}
        {request.status === 'error' && <p>Error: {request.error.message}</p>}
        {request.status === 'success' && <p>Data: {request.data && request.data.name}</p>}
      </div>
      <input className="border px-4 py-2" onChange={(ev) => setName(ev.target.value)} />
    </section>
  );
}
