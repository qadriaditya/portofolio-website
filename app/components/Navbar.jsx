import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap justify-between items-center mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="Menu"></div>
      </div>
    </nav>
  );
};

export default Navbar;
