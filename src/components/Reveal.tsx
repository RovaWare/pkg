import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right";
  delay?: number;
};

export default function Reveal({ children, className, variant = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        variant === "up" && "reveal",
        variant === "left" && "reveal-left",
        variant === "right" && "reveal-right",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
