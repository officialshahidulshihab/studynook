import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div className="bg-[#0d1e1a] min-h-screen flex items-center justify-center font-plus_jakarta px-4">
      <div className="text-center">

       
        <p className="font-playfair text-[140px] md:text-[180px] font-bold leading-none tracking-tighter select-none text-[#162820]">
          <span className="text-[#c9a84c]">4</span>
          0
          <span className="text-[#c9a84c]">4</span>
        </p>

        
        <div className="inline-block border border-[#2b3725] bg-[#162820] text-[#527c74] text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          Page not found
        </div>

        
        <h1 className="font-playfair text-3xl md:text-4xl text-[#f0ebe0] mb-3">
          This room doesn't exist
        </h1>

       
        <div className="w-10 h-[2px] bg-[#2b3725] mx-auto mb-5" />

        
        <p className="text-[#527c74] text-sm max-w-sm mx-auto mb-8 leading-relaxed">
          The page you're looking for may have been moved, removed, or never
          existed in the first place.
        </p>

        
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#15241c] font-semibold text-sm px-7 py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          <FaLongArrowAltLeft />
          Back to home
        </Link>
      </div>
    </div>
  );
}