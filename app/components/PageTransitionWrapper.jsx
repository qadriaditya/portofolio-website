"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();
  const [displayKey, setDisplayKey] = useState(pathname);
  const [state, setState] = useState("enter");

  useEffect(() => {
    if (pathname !== displayKey) {
      // start exit
      setState("exit");
      const t = setTimeout(() => {
        setDisplayKey(pathname);
        setState("enter");
      }, 260); // match CSS duration
      return () => clearTimeout(t);
    }
  }, [pathname]);

  return (
    <div className={`page-transition ${state}`} key={displayKey}>
      {children}
    </div>
  );
}
