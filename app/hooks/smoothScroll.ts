"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Проверяем, что элементы существуют
    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    if (!wrapper || !content) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapper,
      content: content,
      smooth: 1.2,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return null;
}
