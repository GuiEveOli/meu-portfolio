'use client';

import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SKILLS3D from "@/components/ui/3dphone";
import { useEffect } from "react";


export default function Hero3D() {
  return (
    <section id="hero" className="relative w-full h-[1300] md:h-[1700] font-sans overflow-visible md:overflow-hidden">
      {/* SKILLS3D ocupa toda a tela, atrás do texto */}
      <div className="absolute inset-0 w-full h-[2000] z-10" id="skills3d-section">
        <SKILLS3D />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 mt-10 md:mt-0 h-full pointer-events-none">
        <div className="grid md:grid-cols-2 h-full">
          {/* Coluna Texto */}
          <div
            className="
              h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]
              col-span-1
              flex flex-col justify-start md:justify-center items-center md:items-start
              text-white font-sans
              pointer-events-auto
            "
          >
            <div className="pointer-events-auto">
              <p className="md:self-start mt-4 font-thin text-md text-white dark:text-zinc-200 text-center md:text-left md:ml-3 cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text">
                Hi, I am
              </p>
              <h1 className="font-bold text-5xl text-white text-center md:text-left md:ml-1 cursor-default text-edge-outline font-sans sm:text-7xl md:text-8xl">
                Guilherme <br className="md:block hidden" /> Oliveira
              </h1>
              <p className="md:self-start md:mt-4 font-thin text-md text-white dark:text-zinc-200 text-center md:text-left md:ml-3 cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text">
                Graphic and Web Designer
              </p>
            </div>
            <div className="mt-8 md:ml-2 flex flex-col gap-3 pointer-events-auto">
              <a
                href="https://drive.google.com/file/d/1zu1cr-kZYtyM3l4MBv_eqHroecqCGd_w/view?usp=sharing"
                target="_blank"
                className="flex-1"
              >
                <Button className="flex items-center gap-2 w-full">
                  📄
                  <span>Resume</span>
                </Button>
              </a>
              <div className="md:self-start flex gap-3">
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="block w-full overflow-hidden bg-green-600 text-white border-green-600 hover:bg-green-700"
                  >
                    Hire Me
                  </Button>
                </a>
                <a href="https://github.com/GuiEveOli" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-gray-800 text-white border-gray-800 hover:bg-gray-900"
                  >
                    <FaGithub size={24} />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/guioli/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-blue-700 text-white border-blue-700 hover:bg-blue-800"
                  >
                    <FaLinkedin size={24} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          {/* Coluna vazia para dar espaço para interação no desktop */}
          <div className="hidden md:block pointer-events-none"></div>
        </div>
      </div>
      {/* Ícone de scroll opcional */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        {/* <ScrollDownIcon /> */}
      </div>
    </section>
  );
}
