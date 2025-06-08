'use client';

// Error boundaries must be Client Components
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-2">
      <h2 className="text-[36px] text-black font-bold">Something went wrong!</h2>
      <button
        className="p-3 bg-primary w-[180px] rounded-sm hover:scale-110 duration-300 transition-all cursor-pointer"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
