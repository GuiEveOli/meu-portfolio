import { Application } from "@splinetool/runtime";
import React, { useEffect, useRef, useState, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SKILLS3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [app, setApp] = useState<any>();
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // CONFIGURAÇÕES INICIAIS - Posições, escalas e rotações base
  useEffect(() => {
    if (!app) return;

    const cellphone = app.findObjectByName("cellphone");
    if (cellphone) {
      if (isMobile) {
        // Configuração MOBILE
        cellphone.position.x = 0;
        cellphone.position.y = -200;
        cellphone.position.z = 0;
        cellphone.scale.x = 1;
        cellphone.scale.y = 1;
        cellphone.scale.z = 1;
        cellphone.rotation.x = 0;
        cellphone.rotation.y = Math.PI * 2;
        cellphone.rotation.z = 0;
      } else {
        // Configuração DESKTOP
        cellphone.position.x = 200;
        cellphone.position.y = 0;
        cellphone.position.z = 0;
        cellphone.scale.x = 1;
        cellphone.scale.y = 1;
        cellphone.scale.z = 1;
        cellphone.rotation.x = 0;
        cellphone.rotation.y = Math.PI * 2;
        cellphone.rotation.z = 0;
      }
    }
    const cell = app.findObjectByName("cell");
    if (cell) {
      // Posição inicial
      cell.position.x = 0;
      cell.position.y = 0;
      cell.position.z = 0;

      // Escala inicial
      cell.scale.x = 1;
      cell.scale.y = 1;
      cell.scale.z = 1;

      // Rotação inicial
      cell.rotation.x = -0.2269;
      cell.rotation.y = -0.5636;
      cell.rotation.z = -0.1229;
    }

    const GRUPODESKILLS = app.findObjectByName("GRUPODESKILLS");
    if (GRUPODESKILLS) {
      // Posição inicial
      GRUPODESKILLS.position.x = -5;
      GRUPODESKILLS.position.y = 40;
      GRUPODESKILLS.position.z = 20;

      // Escala inicial
      GRUPODESKILLS.scale.x = 1;
      GRUPODESKILLS.scale.y = 1;
      GRUPODESKILLS.scale.z = 1;

      // Rotação inicial
      GRUPODESKILLS.rotation.x = -0.2269;
      GRUPODESKILLS.rotation.y = -0.5636;
      GRUPODESKILLS.rotation.z = -0.1229;
    }

    const TITLE1 = app.findObjectByName("TITLE1");
    if (TITLE1) {

      TITLE1.position.x = -160;
      TITLE1.position.y = 0;
      TITLE1.position.z = 0;

      TITLE1.scale.x = 0;
      TITLE1.scale.y = 0;
      TITLE1.scale.z = 0;

      TITLE1.rotation.x = 0;
      TITLE1.rotation.y = 0;
      TITLE1.rotation.z = Math.PI / 2;
    }

    const TITLE2 = app.findObjectByName("TITLE2");
    if (TITLE2) {
      // Escala inicial
      TITLE2.scale.x = 0;
      TITLE2.scale.y = 0;
      TITLE2.scale.z = 0;
    }

    const texts = [];
    for (let i = 1; i <= 14; i++) {
      const obj = app.findObjectByName(`TEXT${i}`);
      if (obj) texts.push(obj);
    }
    // Agora texts é um array com todos os objetos TEXT1 a TEXT14 encontrados

    texts.forEach((textObj, idx) => {
      if (textObj.scale && textObj.position) {
        // Defina a escala inicial
        textObj.scale.set(0, 0, 0);

        textObj.position.z = 20;

        // Animação de scale com GSAP
        gsap.to(textObj.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: "#hero",
            start: isMobile ? `top+=200 top` : `center+=${idx * 30} center`,
            end: isMobile ? "center+=100 top" : "bottom bottom",
            scrub: true,
          },
        });
      }
    });

  }, [app]);

  // CONFIGURAÇÃO DO SCROLL TRIGGER - Pin do container
  useEffect(() => {
    if (!containerRef.current) return;

    // Pin o container durante a animação
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: isMobile ? "+=700" : "+=900",
      pin: true,
      scrub: true,
      anticipatePin: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // ANIMAÇÕES - Cellphone
  useEffect(() => {
    if (!app) return;
    const cellphone = app.findObjectByName("cellphone");
    if (!cellphone) return;

    gsap.killTweensOf(cellphone.rotation);
    gsap.killTweensOf(cellphone.position);
    gsap.killTweensOf(cellphone.scale);

    // Animação de rotação do cellphone
    gsap.to(cellphone.rotation, {
      x: 0,
      y: 0,
      z: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: isMobile ? "top top" :  "top top",
        end: isMobile ? "center top" :  "center top",
        scrub: true,
      },
    });

    // Animação de posição do cellphone
    gsap.to(cellphone.position, {
      x: isMobile ? 20 : 0, // ajuste conforme desejar
      y: isMobile ? 0 : 0, // ajuste conforme desejar
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: isMobile ? "top top" :  "top top",
        end: isMobile ? "center top" :  "center top",
        scrub: true,
      },
    });

    gsap.to(cellphone.scale, {
      x: isMobile ? 0.7 : 1, // ajuste conforme desejar
      y: isMobile ? 0.7 : 1, // ajuste conforme desejar
      z: isMobile ? 0.7 : 1, // ajuste conforme desejar
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: isMobile ? "top top" :  "top top",
        end: isMobile ? "center top" :  "center top",
        scrub: true,
      },
    });
  }, [app, isMobile]);

// ANIMAÇÕES - cell
  useEffect(() => {
    if (!app) return;
    const cell = app.findObjectByName("cell");
    if (!cell) return;

    // Remove animações anteriores para evitar conflitos
    gsap.killTweensOf(cell.rotation);
    gsap.killTweensOf(cell.position);
    gsap.killTweensOf(cell.scale);

    // Animação de rotação do cell
    gsap.to(cell.rotation, {
      x: 0,
      y: 0,
      z: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: isMobile ? "top top" :  "top top",
        end: isMobile ? "center top" :  "bottom bottom",
        scrub: true,
      },
    });

    // Animação de escala do cell
    gsap.to(cell.scale, {
      x: 1,
      y: 1,
      z: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#hero",
        start: isMobile ? "top top" :  "top center",
        end: isMobile ? "center top" :  "center top",
        scrub: true,
      },
    });

  }, [app]);

// ANIMAÇÕES - title1
  useEffect(() => {
    if (!app) return;
    const TITLE1 = app.findObjectByName("TITLE1");
    if (!TITLE1) return;

    gsap.to(TITLE1.scale, {
      x: 1,
      y: 1,
      z: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#hero",
        start: isMobile ? `top+=200 top` :  "center center",
        end: isMobile ? "center top" :  "center top",
        scrub: true,
      },
      });

  }, [app]);


  // ANIMAÇÃO - GRUPODESKILLS
  useEffect(() => {
    if (!app) return;
    const GRUPODESKILLS = app.findObjectByName("GRUPODESKILLS");
    if (!GRUPODESKILLS) return;

    // Remove animações anteriores para evitar conflitos
    gsap.killTweensOf(GRUPODESKILLS.rotation);
    gsap.killTweensOf(GRUPODESKILLS.position);

    // Animação de rotação
    gsap.to(GRUPODESKILLS.rotation, {
      x: 0,
      y: 0,
      z: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: isMobile ? "top top" :  "top top",
        end: isMobile ? "center top" :  "bottom bottom",
        scrub: true,
      },
    });

    // Animação de posição
    gsap.to(GRUPODESKILLS.position, {
      x: 0,
      y: 47,
      z: 20,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: isMobile ? "top top" :  "top top",
        end: isMobile ? "center top" :  "bottom bottom",
        scrub: true,
      },
    });

  }, [app]);

  // ANIMAÇÃO - OPACIDADE DO GRUPO DE SKILLS
  useEffect(() => {
    if (!app) return;
    const SKILLNAME = app.findObjectByName("SKILLNAME");
    if (!SKILLNAME) return;

    // Remove animações anteriores para evitar conflitos
    gsap.killTweensOf(SKILLNAME.opacity);

    // Animação de opacidade
    gsap.to(SKILLNAME, {
      opacity: 1, // ou o valor desejado
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: isMobile ? "top top" :  "top top",
        end: isMobile ? "center top" :  "bottom bottom",
        scrub: true,
      },
    });
  }, [app]);


  return (
    <div ref={containerRef} className="w-full h-screen flex items-center justify-center bg-transparent">
      <Suspense fallback={<div>Carregando...</div>}>
        <Spline
          scene="/assets/phone.spline"
          onLoad={setApp}
        />
      </Suspense>
    </div>
  );
};

export default SKILLS3D;

