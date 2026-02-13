"use client";

import { usePathname } from "next/navigation";
import CustomScrollBar from "./scrollBar";

export function ScrollBarRoot() {
  const pathname = usePathname();
  return <CustomScrollBar key={pathname} />;
}
