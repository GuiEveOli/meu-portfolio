import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineWork() {
  const data = [
    {
      title: "Jan, 2024 - Present",
      content: (
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[20%_80%] md:gap-8 gap-4 items-start">
            <img
              src="https://cdn.prod.website-files.com/682b10741805d2ffe18d1837/682ba45852117b86d956bfad_grupokoch.jpg"
              alt="startup template"
              className="md:h-40 md:w-40 h-24 w-24 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="mb-8 w-full max-w-xl overflow-hidden break-words">
              <h2 className="text-2xl md:text-3xl text-black dark:text-white font-bold text-indigo-900">
                Grupo Koch
              </h2>
              <p className="text-base text-neutral-700 dark:text-neutral-300 md:text-base mb-1">
                Web Designer
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base text-neutral-700 md:text-sm dark:text-neutral-300">
                <li>
                  <span className="font-bold">
                    Developed and optimized web interfaces
                  </span>
                  – designed and refined layouts for websites and internal systems
                  to ensure a consistent and user-friendly visual experience.
                </li>
                <li>
                  <span className="font-bold">
                    Collaborated with cross-functional teams
                  </span>
                  – worked closely with IT, marketing, and product teams to
                  implement effective visual solutions.
                </li>
                <li>
                  <span className="font-bold">
                    Created supporting graphic materials
                  </span>
                  – designed banners, presentations, and institutional content for
                  both internal and external campaigns.
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "Jun, 2023 - Jan, 2024",
      content: (
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[20%_80%] md:gap-8 gap-4 items-start">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D0BAQHii8J8jP2IRg/company-logo_200_200/company-logo_200_200/0/1686166862256/growfy_social_marketing_logo?e=1756944000&v=beta&t=FCnj-Q4BZpNisMY37y7Fd5BJNfoK5Su9DVGRjifA3Yg"
              alt="startup template"
              className="md:h-40 md:w-40 h-24 w-24 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="mb-8 w-full max-w-xl overflow-hidden break-words">
              <h2 className="text-2xl md:text-3xl text-black dark:text-white font-bold text-indigo-900">
                Growfy Social Marketing
              </h2>
              <p className="text-base text-neutral-700 dark:text-neutral-300 md:text-base mb-1">
                Graphic Designer 
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base text-neutral-700 md:text-sm dark:text-neutral-300">
                <li>
                  <span className="font-bold">
                    Designed content for social media
                  </span>
                  – created visual assets for Facebook, Instagram, and LinkedIn, aligned with brand strategies.
                </li>
                <li>
                  <span className="font-bold">
                    Contributed to rebranding projects
                  </span>
                  – supported brand identity revitalization through updated visual communication.
                </li>
                <li>
                  <span className="font-bold">
                    Assisted in website developmen
                  </span>
                  – participated in designing visual elements for institutional websites.
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "May, 2021 - Feb, 2023",
      content: (
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[20%_80%] md:gap-8 gap-4 items-start">
            <img
              src="https://media.licdn.com/dms/image/v2/C560BAQFJG0HaGg-geg/company-logo_200_200/company-logo_200_200/0/1630660445279/promypet_logo?e=1756944000&v=beta&t=8bCtKDsa82V7nacDmpq9nLEi7TjmTYZaldChC3Tv4xo"
              alt="startup template"
              className="md:h-40 md:w-40 h-24 w-24 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="mb-8 w-full max-w-xl overflow-hidden break-words">
              <h2 className="text-2xl md:text-3xl text-black dark:text-white font-bold text-indigo-900">
                Promypet 
              </h2>
              <p className="text-base text-neutral-700 dark:text-neutral-300 md:text-base mb-1">
                Web & Graphic Designer
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base text-neutral-700 md:text-sm dark:text-neutral-300">
                <li>
                  <span className="font-bold">
                    Created visual content for social media
                  </span>
                  – designed graphics for Instagram and Facebook, maintaining brand consistency.
                </li>
                <li>
                  <span className="font-bold">
                    Produced explanatory animated videos
                  </span>
                  – developed animations to clearly present the company’s services
                </li>
                <li>
                  <span className="font-bold">
                    Led the visual redesign of digital platforms
                  </span>
                  – overhauled the company’s website and app layout to enhance visual identity and user experience.
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
  ];
  return (
    <div id="experience" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
