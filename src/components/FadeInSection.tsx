"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode
} from "react";

type FadeInSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  /**
   * Run the intro transition once after mount (above-the-fold hero).
   * Mutually exclusive with scroll-based reveal.
   */
  introOnMount?: boolean;
} & Omit<ComponentPropsWithoutRef<"section">, "id" | "className" | "children">;

export function FadeInSection({
  id,
  className = "",
  children,
  introOnMount = false,
  ...rest
}: FadeInSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (introOnMount) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setVisible(true);
        return;
      }
      let inner = 0;
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        cancelAnimationFrame(outer);
        cancelAnimationFrame(inner);
      };
    }

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [introOnMount]);

  return (
    <section
      ref={ref}
      id={id}
      className={`reveal-section${introOnMount ? "" : " reveal-section--scroll"}${visible ? " reveal-section--visible" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </section>
  );
}
