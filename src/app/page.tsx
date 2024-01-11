import Image from "next/image";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen text-6xl text-center text-balance font-bold leading-normal">
      This page was generated at {new Date().toTimeString()}
    </main>
  );
}
