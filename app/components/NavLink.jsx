import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <li className="relative">
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-white sm:text-base rounded md:p-0 hover:text-slate-900 transition-colors duration-300 relative"
        style={{ position: "relative" }}
      >
        <span className="inline-block transition-transform duration-300 hover:translate-y-[-2px] hover:scale-[1.02]">
          {title}
        </span>
        <span className="absolute left-0 -bottom-1 h-[2px] bg-blue-500 rounded w-0 transition-all duration-300"></span>
      </Link>
    </li>
  );
};

export default NavLink;
