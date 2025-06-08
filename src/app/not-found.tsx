import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-primary text-[86px] font-bold">Not Found</h2>
      <p className="text-black font-medium">Could not find requested resource</p>
      <Link
        className="w-[180px] bg-primary px-[10px] py-[8px] text-center text-white rounded-md mt-[6px] hover:scale-105 transition duration-300"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
