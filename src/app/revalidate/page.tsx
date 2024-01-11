"use client";

import { revalidate } from "./actions";

export default function Page() {
  return (
    <button
      className="border p-8 border-white rounded-full"
      onClick={async () => {
        await revalidate();
        alert("Revalidation complete!");
      }}
    >
      Revalidate
    </button>
  );
}
