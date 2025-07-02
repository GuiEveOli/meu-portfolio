'use client';

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import Hero3D from "@/components/ui/hero3d";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TimelineWork } from "@/components/ui/timeline-final";
import { Projects } from "@/components/ui/projects";
import { Animatedbg } from "@/components/animatedbg";
import Contact from "@/components/ui/contact";

function NavbarDemo() {
  const navItems = [
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                variant="primary"
                className="w-full"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => setLoading(false);

    if (document.readyState === "complete") {
      setTimeout(finishLoading, 2500);
    } else {
      window.addEventListener("load", () => {
        setTimeout(finishLoading, 2500);
      });
      return () => window.removeEventListener("load", finishLoading);
    }
  }, []);

  return (
    <>
      <NavbarDemo />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-indigo-900 space-y-8 font-sans relative">
        <Animatedbg />
        <div className="relative z-10 w-full flex flex-col items-center">
          <Hero3D />
          <MacbookScroll />
          <TimelineWork />
          <Projects />
          <Contact />
        </div>
        {loading && (
          <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mb-3" />
            <p className="text-gray-500 text-sm">Carregando...</p>
          </div>
        )}
      </main>
    </>
  );
}
