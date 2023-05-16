import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="w-full pt-3">
      <div className="flex flex-row">
        <Image
          className="relative left-10"
          alt=" pointer icon"
          width={24}
          height={24}
          src="/icons/search.svg"
        />
        <input
          type="text"
          placeholder="Search"
          className="rounded-full bg-search px-16 py-1.5 text-white"
        />
        <Image
          className="relative -left-12"
          alt=" pointer icon"
          width={24}
          height={24}
          src="/icons/microphone.svg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
