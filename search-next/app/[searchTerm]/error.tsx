"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <h2>
        <button onClick={() => reset()}>Try Again</button>
        <p>
          Or go back to <Link href="/">Home</Link>
        </p>
      </h2>
    </main>
  );
}
