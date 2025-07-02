"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function Animatedbg() {
  const images = [
    "/images/bg/01.png",
    "/images/bg/02.jpg",
    "/images/bg/03.jpg",
    "/images/bg/04.png",
    "/images/bg/05.jpg",
    "/images/bg/06.jpg",
    "/images/bg/08.png",
    "/images/bg/09.png",
    "/images/bg/10.jpg",
    "/images/bg/11.jpg",
    "/images/bg/12.jpg",
    "/images/bg/13.jpg",
    "/images/bg/14.png",
    "/images/bg/15.jpg",
    "/images/bg/16.png",
    "/images/bg/17.png",
    "/images/bg/18.png",
    "/images/bg/19.png",
    "/images/bg/20.png",
    "/images/bg/21.png",
    "/images/bg/22.png",
    "/images/bg/23.png",
    "/images/bg/01.png",
    "/images/bg/02.jpg",
    "/images/bg/03.jpg",
    "/images/bg/04.png",
    "/images/bg/05.jpg",
    "/images/bg/06.jpg",
    "/images/bg/08.png",
    "/images/bg/09.png",
    "/images/bg/10.jpg",
    "/images/bg/11.jpg",
    "/images/bg/01.png",
    "/images/bg/02.jpg",
    "/images/bg/03.jpg",
    "/images/bg/04.png",
    "/images/bg/05.jpg",
    "/images/bg/06.jpg",
    "/images/bg/08.png",
    "/images/bg/09.png",
    "/images/bg/10.jpg",
    "/images/bg/11.jpg",
    "/images/bg/12.jpg",
    "/images/bg/13.jpg",
    "/images/bg/14.png",
    "/images/bg/15.jpg",
    "/images/bg/16.png",
    "/images/bg/17.png",
    "/images/bg/18.png",
    "/images/bg/19.png",
    "/images/bg/20.png",
    "/images/bg/21.png",
    "/images/bg/22.png",
    "/images/bg/23.png",
    "/images/bg/01.png",
    "/images/bg/02.jpg",
    "/images/bg/03.jpg",
    "/images/bg/04.png",
    "/images/bg/05.jpg",
    "/images/bg/06.jpg",
    "/images/bg/08.png",
    "/images/bg/09.png",
    "/images/bg/10.jpg",
    "/images/bg/11.jpg",
  ];
  return (
    <div>
      {/* overlay */}
      <div className="fixed inset-0 z-10 h-screen w-screen bg-indigo-800/95" />
      <ThreeDMarquee
        className="pointer-events-none fixed inset-0 h-screen w-screen z-0"
        images={images}
      />
    </div>
  );
}
