"use client";

import { useRef, useState } from "react";

import { cn } from "@/utils/classname.util";

// [NOTES] the "?url" part helps to import the svg as a source string not a React Comp
import LogoImage from "@/assets/images/sphereal-logo.svg?url";
import Button, { ButtonProps } from "@/components/Button";
import Orbit from "@/components/Orbit";

const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

const loginItems: {
  variant: ButtonProps["variant"];
  name: string;
  href: string;
}[] = [
  {
    variant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    variant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
];

export const Header = () => {
  // refs
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // states
  const [isNavOpen, setNavOpen] = useState(false);

  // render
  return (
    <>
      <header className="relative z-40 border-b border-gray-200/20">
        {/* main content */}
        <div className="container">
          <div className="flex h-18 items-center justify-between lg:h-20">
            {/* left content, logo */}
            <div className="flex items-center gap-4">
              {/* [NOTES] learn how to use iconic gradient here - logo */}
              <div
                className={cn(
                  "size-10 bg-gray-200",
                  `bg-[conic-gradient(from_45deg,var(--color-violet-500),var(--color-fuchsia-500),var(--color-amber-400),var(--color-teal-400),var(--color-violet-500))]`,
                )}
                style={{
                  maskImage: `url(${LogoImage.src})`,
                  maskSize: "contain",
                }}
              />
              {/* text */}
              <div className="text-2xl font-extrabold">sphereal.ai</div>
            </div>

            {/* whole navigation with items */}
            <div className="hidden h-full lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }) => {
                  return (
                    <a
                      key={href}
                      href={href}
                      className="relative inline-flex h-full items-center px-10 text-xs font-bold uppercase tracking-widest text-gray-200 before:absolute before:bottom-0 before:left-0 before:h-2 before:w-px before:bg-gray-200/20 before:content-[''] after:absolute after:bottom-0 after:right-0 after:h-2 after:w-px after:bg-gray-200/20 last:after:content-['']"
                    >
                      {name}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* right content, buttons */}
            {/* desktop buttons */}
            <div className="hidden gap-4 lg:flex">
              {loginItems.map(({ variant, name, href }) => {
                return (
                  <a key={name} href={href}>
                    <Button variant={variant}>{name}</Button>
                  </a>
                );
              })}
            </div>

            {/* mobile button */}
            <div className="flex items-center lg:hidden">
              {/* [NOTES] learn how to create gradient border*/}
              <button
                onClick={() => {
                  if (!mobileNavRef?.current) return;
                  mobileNavRef?.current?.classList.toggle("active-nav");
                  setNavOpen(!isNavOpen);
                }}
                className="relative size-10 rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-500),var(--color-fuchsia-500),var(--color-amber-400),var(--color-teal-400),var(--color-violet-500))_border-box]"
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={cn(
                      "h-0.5 w-4 translate-y-1 bg-gray-100 transition duration-300",
                      isNavOpen && "translate-y-0 rotate-45",
                    )}
                  />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={cn(
                      "h-0.5 w-4 -translate-y-1 bg-gray-100 transition duration-300",
                      isNavOpen && "translate-y-0 -rotate-45",
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile nav modal */}
      <div
        ref={mobileNavRef}
        className="pointer-events-none fixed bottom-0 left-0 right-0 top-18 z-[-1] overflow-hidden bg-gray-950 opacity-0 transition-all duration-300"
      >
        <div className="container h-full">
          <div className="abs-center isolate -z-10">
            <Orbit />
          </div>
          <div className="abs-center isolate -z-10">
            <Orbit className="size-[350px]" />
          </div>
          <div className="abs-center isolate -z-10">
            <Orbit className="size-[500px]" />
          </div>
          <div className="abs-center isolate -z-10">
            <Orbit className="size-[650px]" />
          </div>
          <div className="abs-center isolate -z-10">
            <Orbit className="size-[800px]" />
          </div>

          <nav className="flex h-full flex-col items-center justify-center gap-4 py-8">
            {navItems.map(({ name, href }) => {
              return (
                <a
                  key={href}
                  href={href}
                  className="h-10 text-xs font-bold uppercase tracking-widest text-gray-400"
                >
                  {name}
                </a>
              );
            })}
            {loginItems.map(({ variant, name, href }) => {
              return (
                <a key={name} href={href} className="w-full max-w-xs">
                  <Button block variant={variant}>
                    {name}
                  </Button>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
